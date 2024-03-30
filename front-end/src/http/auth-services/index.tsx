import { IUser } from '@/interfaces/user.interface';
import { http } from '@/http';

export const SignInUser = async (user: IUser) =>
  await http.post<IUser>('login', user);
