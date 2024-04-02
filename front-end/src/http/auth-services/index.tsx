import { IUser, IUserCreate } from '@/interfaces/user.interface';
import { http } from '@/http';
import { useParams } from 'react-router-dom';

export const SignInUser = async (user: IUser) =>
  await http.post<IUser>('login', user);

export const ResetPasswordUser = async (
  newPassword: string,
  confirmPassword: string
) => {
  const { token } = useParams<{ token: string }>();
  await http.post(`reset-password/${token}`, { newPassword, confirmPassword });
};

export const RegisterUser = async (user: IUserCreate) => {
  await http.post<IUser>('create', user);
};
