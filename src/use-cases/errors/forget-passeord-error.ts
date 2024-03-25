interface ForgetPassword {
  message: string;
}

export class ForgetPasswordError extends Error implements ForgetPassword {
  constructor(identifier: string) {
    super(identifier);
  }
}
