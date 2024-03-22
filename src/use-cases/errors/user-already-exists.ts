interface UserAlreadyExists {
  message: string;
}

export class UserAlreadyExistsError extends Error implements UserAlreadyExists {
  constructor(identifier: string) {
    super(`User with e-mail "${identifier}" already exists.`);
  }
}
