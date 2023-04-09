import { NextApiResponse } from 'next';
import { ExtendedNextApiRequestAuth, ResMessageType, payload } from './types';
import jwt from 'jsonwebtoken';

const auth = (handler: Function) => {
  return async (
    req: ExtendedNextApiRequestAuth,
    res: NextApiResponse<ResMessageType>
  ) => {
    if (req.method !== 'POST') return handler(req, res);

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'ログインが必要です' });

    try {
      if (!process.env.JWT_SECRET) throw new Error();
      const { email } = jwt.verify(token, process.env.JWT_SECRET) as payload;
      req.body.email = email;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'ログインが必要です' });
    }
  };
};

export default auth;
