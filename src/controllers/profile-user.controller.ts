import { Request, Response } from 'express';
import { UnauthorizedError } from '../use-cases/errors/unauthorized-error';
import { ProfileUserUseCase } from '../use-cases/profile-user.usecase';

export class ProfileUserController {
  async handle(req: Request, res: Response) {
    try {
      const userId = req.user.id;

      if (!userId) {
        throw new UnauthorizedError('ID do usuário não encontrado');
      }

      const userProfile = await ProfileUserUseCase.execute({ id: userId });

      res.status(200).json(userProfile);
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        return res.status(401).send({
          message: error.message,
        });
      }

      throw error;
    }
  }
}
