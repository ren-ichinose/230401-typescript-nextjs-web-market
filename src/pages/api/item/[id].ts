import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';
import { FindItem, ResReadSingleType } from 'utils/types';

const getSingleItem = async (
  req: NextApiRequest,
  res: NextApiResponse<ResReadSingleType>
) => {
  try {
    await connectDB();

    const singleItem = await ItemModel.findById<FindItem>(req.query.id);
    if (!singleItem) throw new Error();

    return res.status(200).json({
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
