import { Request, Response } from 'express';
import { FindUserIdUseCase } from '../use-cases/find-user-id.usecase';
import { UserIdExistsError } from '../use-cases/errors/user-id-exists';
import { z } from 'zod';

const FindIdParamsSchema = z.object({
  id: z.string().uuid(),
});

export class FindUserIdController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = FindIdParamsSchema.parse(req.params);
      const userFound = await FindUserIdUseCase.execute(id);
      return res.status(200).json({ message: 'User found', userFound });
    } catch (error) {
      if (error instanceof UserIdExistsError) {
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
