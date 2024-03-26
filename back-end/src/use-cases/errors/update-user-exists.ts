interface UserUpdateExists {
  message: string;
}

export class UserUpdateExistsError extends Error implements UserUpdateExists {
  constructor(identifier: string) {
    super(`User - ${identifier}: not found`);
  }
}
