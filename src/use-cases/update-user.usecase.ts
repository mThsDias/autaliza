import { User } from '../entities/User';
import { prismaClient } from '../database/prisma-client';
import { UpdateUserDTO } from '../dtos/update-user.dtos';
import { UserUpdateExistsError } from './errors/update-user-exists';

export class UpdateUserUseCase {
  static async execute({ password, name, id }: UpdateUserDTO): Promise<User> {
    const updateUser = await prismaClient.user.update({
      where: { id },
      data: { name, password },
    });

    if (!id) {
      throw new UserUpdateExistsError(id);
    }

    return updateUser;
  }
}
