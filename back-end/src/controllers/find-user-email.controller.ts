import { Request, Response } from 'express';
import { FindUserEmailUseCase } from '../use-cases/find-user-email.usecase';
import { UserEmailExistsError } from '../use-cases/errors/user-email-exists';
import { z } from 'zod';

const FindEmailParamsSchema = z.object({
  email: z.string().email(),
});

export class FindUserEmailController {
  async handle(req: Request, res: Response) {
    try {
      const { email } = FindEmailParamsSchema.parse(req.query);
      const userFound = await FindUserEmailUseCase.execute(email);
      return res.status(200).json({ message: 'User found', userFound });
    } catch (error) {
      if (error instanceof UserEmailExistsError) {
        return res.status(404).send({
          message: error.message,
        });
      }

      if (error instanceof z.ZodError) {
        return res.status(400).send({
          message: error.errors[0].message,
        });
      }
    }
  }
}
