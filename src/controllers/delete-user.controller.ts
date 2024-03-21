import { Request, Response } from 'express';
import { UserIdExistsError } from '../use-cases/errors/user-id-exists';
import { DeleteUserUseCase } from '../use-cases/delete-user.usecase';
import { z } from 'zod';

const DeleteIdParamsSchema = z.object({
  id: z.string().uuid(),
});

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = DeleteIdParamsSchema.parse(req.params);
      const deleteUser = await DeleteUserUseCase.execute(id);
      return res
        .status(200)
        .json({ message: 'User successfully deleted', deleteUser });
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
