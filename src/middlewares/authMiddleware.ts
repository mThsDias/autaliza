import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from '../dtos/jwt-payload.dtos';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export const authMiddleware = async (
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Não autorizado' });
  }

  const token = authorization?.split(' ')[1];

  try {
    const { id } = jwt.verify(token!, process.env.JWT_PASSWORD!) as JwtPayload;
    req.user = { id } as Partial<User>;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
