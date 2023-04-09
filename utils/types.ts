import { Types } from 'mongoose';
import { NextApiRequest } from 'next';

export interface ItemDataType {
  title: string;
  image: string;
  price: string;
  description: string;
  email: string;
}

export interface UserDataType {
  name: string;
  email: string;
  password: string;
}

export interface payload {
  email: string;
}

export interface ExtendedNextApiRequestAuth extends NextApiRequest {
  body: {
    email: string;
  };
}

export interface ExtendedNextApiRequestUser extends NextApiRequest {
  body: UserDataType;
}

export interface FindUser extends UserDataType {
  _id: Types.ObjectId;
}

export interface ResMessageType {
  message: string;
  accessToken?: string;
}
