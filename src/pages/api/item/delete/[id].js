import auth from 'utils/auth';
import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';

const deleteItem = async (req, res) => {
  try {
    await connectDB();
    
    const _id = req.query.id;
    const email = req.body.email;

    const item = await ItemModel.findById(_id);
    if (email !== item.email) throw new Error();

    await ItemModel.deleteOne({ _id });
    return res.status(200).json({ message: 'アイテムを削除しました' });
  } catch (error) {
    return res.status(400).json({ message: 'アイテムを削除できませんでした' });
  }
};

export default auth(deleteItem);
