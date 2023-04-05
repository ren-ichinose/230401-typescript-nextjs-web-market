import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';

const deleteItem = async (req, res) => {
  try {
    const _id = req.query.id;
    await connectDB();
    await ItemModel.deleteOne({ _id });
    return res.status(200).json({ message: 'アイテムを削除しました' });
  } catch (error) {
    return res.status(400).json({ message: 'アイテムを削除できませんでした' });
  }
};

export default deleteItem;
