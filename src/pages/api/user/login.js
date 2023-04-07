import connectDB from 'utils/database';
import { UserModel } from 'utils/schemaModels';

const loginUser = async (req, res) => {
  try {
    await connectDB();
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) throw new Error();
    if (password !== user.password) throw new Error();

    return res.status(200).json({ message: 'ログインが完了しました', user });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'メールアドレスまたはパスワードが正しくありません' });
  }
};

export default loginUser;
