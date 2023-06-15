import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { generateUserId } from './user.utils';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId();
  user.id = id;

  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(400, 'failed to create user', 'this value not defied');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
