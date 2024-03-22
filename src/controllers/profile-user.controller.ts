import { Request, Response } from 'express';
import { ProfileUserUseCase } from '../use-cases/profile-user.usecase';
import { JwtPayload } from '../dtos/jwt-payload.dtos';
import { UnauthorizedError } from '../use-cases/errors/unauthorized-error';
import jwt from 'jsonwebtoken';

export class ProfileUserController {
  async handle(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).json({ message: 'Não autorizado' });
      }

      const token = authorization?.split(' ')[1];

      const { id } = jwt.verify(token, process.env.JWT_PASSWORD!) as JwtPayload;

      const logged = await ProfileUserUseCase.execute({ id });

      res.status(200).send({ message: 'Token autorizado', logged });
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
