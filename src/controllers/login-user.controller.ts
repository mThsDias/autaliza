import { Request, Response } from 'express';
import { LoginUserUseCase } from '../use-cases/login-user.usecase';
import { string, z } from 'zod';
import { UserAlreadyExistsError } from '../use-cases/errors/user-already-exists';

const loginUserSchema = z.object({
  email: string().email(),
  password: z.string().min(6),
});

export class LoginUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = loginUserSchema.parse(req.body);
      const token = await LoginUserUseCase.execute({ email, password });
      return res.status(200).json({ message: 'Login success!', token });
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return res.status(409).send({
          message: error.message,
        });
      }

      if (error instanceof z.ZodError) {
        return res.status(400).send({
          message: error.errors[0].message,
        });
      }

      throw error;
    }
  }
}
