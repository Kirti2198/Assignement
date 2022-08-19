import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
  name: string;
  image: string;
  description: string;
  dateLastEdited: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateLastEdited: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  // {
  //   versionKey: false,
  // }
);

export default mongoose.model<IUserModel>('User', UserSchema);
