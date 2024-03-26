import { Request, Response } from 'express';
import { ResetPasswordUseCase } from '../use-cases/reset-password.usecase';
import { z } from 'zod';
import { ForgetPasswordError } from '../use-cases/errors/forget-passeord-error';

const ResetPasswordBodySchema = z.object({
  newPassword: z.string().min(6),
});

export class ResetPasswordController {
  async handle(req: Request, res: Response) {
    const { token } = req.params;
    const { newPassword } = ResetPasswordBodySchema.parse(req.body);

    try {
      await ResetPasswordUseCase.execute(token, newPassword);
      res.status(200).send({ message: 'Senha trocada com sucesso' });
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
