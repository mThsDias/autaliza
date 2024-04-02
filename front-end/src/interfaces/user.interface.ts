export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  token: string;
  name: string;
  email: string;
}
