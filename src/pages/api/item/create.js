import auth from 'utils/auth';
import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';

const createItem = async (req, res) => {
  try {
    await connectDB();
    await ItemModel.create(req.body);
    return res.status(200).json({ message: 'アイテムを作成しました' });
  } catch (error) {
    return res.status(400).json({ message: 'アイテムを作成できませんでした' });
  }
};

export default auth(createItem);
