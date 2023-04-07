import connectDB from 'utils/database';
import { UserModel } from 'utils/schemaModels';

const registerUser = async (req, res) => {
  try {
    const user = req.body;
    await connectDB();
    await UserModel.create(user);
    return res.status(200).json({ message: 'ユーザを登録しました', user });
  } catch (error) {
    return res.status(400).json({ message: 'ユーザを登録できませんでした' });
  }
};

export default registerUser;
