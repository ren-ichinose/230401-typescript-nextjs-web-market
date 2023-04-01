const hello = (req, res) => {
  return res.status(200).json({ name: 'Ren Ichinose' });
};

export default hello;
