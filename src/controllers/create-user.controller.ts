/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { z } from 'zod';
import { CreateUserUseCase } from '../use-cases/create-user.usecase';
import { UserlreadyExistsError } from '../use-cases/errors/user-already-exists';

export const createUserBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = createUserBodySchema.parse(req.body);
      await CreateUserUseCase.execute({ name, email, password });
      return res.status(201).json({ message: 'User created!' });
    } catch (error) {
      if (error instanceof UserlreadyExistsError) {
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
