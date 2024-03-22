import { Request, Response } from 'express';
import { UnauthorizedError } from '../use-cases/errors/unauthorized-error';

export class ProfileUserController {
  async handle(req: Request, res: Response) {
    try {
      res.status(200).send(req.user);
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
