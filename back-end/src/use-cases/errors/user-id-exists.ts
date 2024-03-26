interface UserIdExists {
  message: string;
}

export class UserIdExistsError extends Error implements UserIdExists {
  constructor(identifier: string) {
    super(`${identifier} not found `);
  }
}
