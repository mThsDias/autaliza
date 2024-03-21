interface UserAlreadyExists {
  message: string;
}

export class UserlreadyExistsError extends Error implements UserAlreadyExists {
  constructor(identifier: string) {
    super(`User with e-mail "${identifier}" already exists.`);
  }
}
