import { NextApiResponse } from 'next';
import auth from 'utils/auth';
import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';
import {
  ExtendedNextApiRequestAuth,
  FindItem,
  ResMessageType,
} from 'utils/types';

const deleteItem = async (
  req: ExtendedNextApiRequestAuth,
  res: NextApiResponse<ResMessageType>
) => {
  try {
    await connectDB();

    const _id = req.query.id;
    const email = req.body.email;

    const item = await ItemModel.findById<FindItem>(_id);
    if (email !== item?.email) throw new Error();

    await ItemModel.deleteOne({ _id });

    return res.status(200).json({ message: 'アイテムを削除しました' });
  } catch (error) {
    return res.status(400).json({ message: 'アイテムを削除できませんでした' });
  }
};

export default auth(deleteItem);
