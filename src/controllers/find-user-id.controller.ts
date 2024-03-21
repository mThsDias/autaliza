import { Request, Response } from 'express';
import { FindUserId } from '../use-cases/find-user-id.usecase';
import { UserIdExistsError } from '../use-cases/errors/user-id-exists';

export class FindUserIdController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await FindUserId.execute(id);
      return res.status(200).json({ message: 'ID encontrado', user });
    } catch (error) {
      if (error instanceof UserIdExistsError) {
        return res.status(409).send({
          message: error.message,
        });
      }

      throw error;
    }
  }
}
