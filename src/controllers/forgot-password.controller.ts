import { Request, Response } from 'express';
import { ForgotPasswordUseCase } from '../use-cases/forgot-password.usecase';
import { z } from 'zod';
import { ForgetPasswordError } from '../use-cases/errors/forget-passeord-error';

const ForgetPasswordBodySchema = z.object({
  email: z.string().email(),
});

export class ForgotPasswordController {
  async handle(req: Request, res: Response) {
    try {
      const { email } = ForgetPasswordBodySchema.parse(req.body);
      await ForgotPasswordUseCase.execute(email);
      return res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
      if (error instanceof ForgetPasswordError) {
        return res.status(404).send({
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
