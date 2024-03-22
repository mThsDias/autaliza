import { Request, Response, NextFunction } from 'express';
import { ProfileUserUseCase } from '../use-cases/profile-user.usecase';
import { JwtPayload } from '../dtos/jwt-payload.dtos';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Não autorizado' });
  }

  const token = authorization?.split(' ')[1];

  const { id } = jwt.verify(token, process.env.JWT_PASSWORD!) as JwtPayload;

  const logged = await ProfileUserUseCase.execute({ id });

  req.user = logged;

  next();
};
