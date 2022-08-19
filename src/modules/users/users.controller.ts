/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';
import User from '../users/users.model';
const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let options = {};

    if (req.query.s) {
      options = {
        ...options,
        $or: [
          { name: new RegExp(req.query.s.toString()) },
          { description: new RegExp(req.query.s.toString()) },
        ],
      };
    }

    const users = await User.find(options);
    res.status(200).send({ users: users });
    next();
  } catch (err) {
    return res.status(200).json({ message: err });
  }
};
export default {
  search,
};
