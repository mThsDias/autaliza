import { IUserLogin, IUserCreate, IUser } from '@/interfaces/user.interface';
import { http } from '@/http';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';

export const SignInUser = async (user: IUserLogin) => {
  const response: AxiosResponse<IUser> = await http.post<IUser>('login', user);
  const token: string = response.data.token;
  return token;
};

export const ResetPasswordUser = async (
  newPassword: string,
  confirmPassword: string
) => {
  const { token } = useParams<{ token: string }>();
  await http.post(`reset-password/${token}`, { newPassword, confirmPassword });
};

export const CreateUser = async (user: IUserCreate): Promise<IUser> => {
  const response = await http.post<IUser>('create', user);
  return response.data;
};

export const GetUser = async (): Promise<IUser> => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    throw new Error('Token não encontrado');
  }

  const response: AxiosResponse<IUser> = await http.get<IUser>('profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const ForgotPasswordUser = async (email: string): Promise<void> => {
  const response = await http.post('forgot-password', { email });
  return response.data;
};
