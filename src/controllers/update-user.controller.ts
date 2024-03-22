import { Request, Response } from 'express';
import { UpdateUserUseCase } from '../use-cases/update-user.usecase';
import { UserUpdateExistsError } from '../use-cases/errors/update-user-exists';
import { z } from 'zod';

const UpdateUserParamsSchema = z.object({
  id: z.string().uuid(),
});

const UpdateUserBodySchema = z.object({
  name: z.string(),
  password: z.string().min(6),
});

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = UpdateUserParamsSchema.parse(req.params);
      const { name, password } = UpdateUserBodySchema.parse(req.body);
      const updateUser = await UpdateUserUseCase.execute({
        id,
        name,
        password,
      });
      return res.status(200).json({ message: 'User updated', updateUser });
    } catch (error) {
      if (error instanceof UserUpdateExistsError) {
        return res.status(409).send({
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
