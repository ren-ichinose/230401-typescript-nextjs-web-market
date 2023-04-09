import { NextApiResponse } from 'next';
import auth from 'utils/auth';
import connectDB from 'utils/database';
import { ItemModel } from 'utils/schemaModels';
import { ExtendedNextApiRequestItem, ItemDataType, ResMessageType } from 'utils/types';


const updateItem = async (req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
  try {
    await connectDB();
    
    const updateItem = req.body;
    const _id = req.query.id;
    const email = req.body.email;

    const item = await ItemModel.findById<ItemDataType>(_id);
    if (email !== item?.email) throw new Error();

    await ItemModel.updateOne({ _id }, updateItem);

    return res
      .status(200)
      .json({ message: 'アイテムを更新しました'});
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'アイテムの更新ができませんでした' });
  }
};

export default auth(updateItem);
