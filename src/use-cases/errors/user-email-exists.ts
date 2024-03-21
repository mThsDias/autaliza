interface UserEmailExists {
  message: string;
}

export class UserEmailExistsError extends Error implements UserEmailExists {
  constructor(identifier: string) {
    super(`${identifier} not found`);
  }
}
