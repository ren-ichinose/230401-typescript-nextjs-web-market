import { NextApiResponse } from 'next';
import auth from 'utils/auth';
import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';
import { ExtendedNextApiRequestItem, ResMessageType } from 'utils/types';

const createItem = async (
  req: ExtendedNextApiRequestItem,
  res: NextApiResponse<ResMessageType>
) => {
  try {
    await connectDB();
    await ItemModel.create(req.body);
    return res.status(200).json({ message: 'アイテムを作成しました' });
  } catch (error) {
    return res.status(400).json({ message: 'アイテムを作成できませんでした' });
  }
};

export default auth(createItem);
