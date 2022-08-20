/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';
import User from '../users/users.model';

export interface ISortBy {
  name?: boolean;
  dateLastEdited?: boolean;
}
const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let options = {};
    if (req.query.s) {
      options = {
        ...options,
        $or: [
          {
            name: { $regex: new RegExp(req.query.s.toString()), $options: 'i' },
          },
          {
            description: {
              $regex: new RegExp(req.query.s.toString()),
              $options: 'i',
            },
          },
        ],
      };
    }
    let sort = {};
    if (req.query.sortBy?.toString() == 'name') {
      sort = { name: -1 };
    } else if (req.query.sortBy?.toString() == 'dateLastEdited') {
      sort = { dateLastEdited: 1 };
    } else {
      sort = { name: 1 };
    }

    const limit: any = req.query.limit || 10;
    const page: any = req.query.page || 1;
    const skip = parseInt(limit) * parseInt(page) || 1;
    const users = await User.find(options).sort(sort).limit(limit).skip(skip);

    res.status(200).send({ users: users });
    next();
  } catch (err) {
    console.log('Error', err);
    return res.status(200).json({ message: err });
  }
};
export default {
  search,
};
