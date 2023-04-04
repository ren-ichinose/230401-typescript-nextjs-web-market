import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';

const getSingleItem = async (req, res) => {
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(req.query.id)
    return res
      .status(200)
      .json({
        message: 'アイテムを読み取りました',
        singleItem,
      });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'アイテムの読み取りに失敗しました' });
  }
};

export default getSingleItem;
