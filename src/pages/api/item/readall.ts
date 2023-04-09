import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';
import { FindItem, ResReadAllType } from 'utils/types';

const getAllItems = async (
  req: NextApiRequest,
  res: NextApiResponse<ResReadAllType>
) => {
  try {
    await connectDB();
    const allItems = await ItemModel.find<FindItem>();
    return res.status(200).json({
      message: 'すべてのアイテムを読み取りました',
      allItems,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'アイテムの読み取りに失敗しました' });
  }
};

export default getAllItems;
