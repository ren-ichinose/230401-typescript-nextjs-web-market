import jwt from 'jsonwebtoken';

const auth = (handler) => {
  return async (req, res) => {
    if (req.method !== 'POST') return handler(req.res);

    const token = await req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'ログインが必要です' });

    try {
      const { email } = jwt.verify(token, process.env.JWT_SECRET);
      req.body.email = email;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'ログインが必要です' });
    }
  };
};

export default auth;
