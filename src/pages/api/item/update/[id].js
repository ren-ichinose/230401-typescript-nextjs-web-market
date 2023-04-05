const { default: connectDB } = require('utils/database');
const { ItemModel } = require('utils/schemaModels');

const updateItem = async (req, res) => {
  try {
    await connectDB();
    const updateItem = req.body;
    const _id = req.query.id;
    await ItemModel.updateOne({ _id }, updateItem);
    return res
      .status(200)
      .json({ message: 'アイテムを更新しました', updateItem });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'アイテムの更新ができませんでした' });
  }
};

export default updateItem;
