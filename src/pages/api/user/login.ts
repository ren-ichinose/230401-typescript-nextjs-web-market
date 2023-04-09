import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import connectDB from 'utils/database';
import { UserModel } from 'utils/schemaModels';
import {
  ExtendedNextApiRequestUser,
  FindUser,
  ResMessageType,
} from 'utils/types';

const loginUser = async (
  req: ExtendedNextApiRequestUser,
  res: NextApiResponse<ResMessageType>
) => {
  try {
    await connectDB();
    const { email, password } = req.body;

    const user = await UserModel.findOne<FindUser>({ email });
    if (!user) throw new Error();
    if (password !== user.password) throw new Error();
    if (!process.env.JWT_SECRET) throw new Error();

    const payload = { email };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
    return res
      .status(200)
      .json({ message: 'ログインが完了しました', accessToken });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'メールアドレスまたはパスワードが正しくありません' });
  }
};

export default loginUser;
