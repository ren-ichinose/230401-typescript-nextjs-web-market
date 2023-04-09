import { NextApiResponse } from 'next';
import connectDB from 'utils/database';
import { UserModel } from 'utils/schemaModels';
import { ExtendedNextApiRequestUser, ResMessageType } from 'utils/types';

const registerUser = async (
  req: ExtendedNextApiRequestUser,
  res: NextApiResponse<ResMessageType>
) => {
  try {
    const user = req.body;
    await connectDB();
    await UserModel.create(user);
    return res.status(200).json({ message: 'ユーザを登録しました' });
  } catch (error) {
    return res.status(400).json({ message: 'ユーザを登録できませんでした' });
  }
};

export default registerUser;
