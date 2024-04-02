export interface IUser {
  email: string;
  password: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
