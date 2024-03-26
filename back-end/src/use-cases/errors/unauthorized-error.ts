interface Unauthorized {
  message: string;
}

export class UnauthorizedError extends Error implements Unauthorized {
  constructor(identifier: string) {
    super(identifier);
  }
}
