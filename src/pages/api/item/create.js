import connectDB from 'utils/database';

const createItem = (req, res) => {
  connectDB();
  console.log(req.body.title);
  return res.status(200).json({ message: 'アイテムを作成しました' });
};

export default createItem; 