import { User } from '../entities/User';
import { prismaClient } from '../database/prisma-client';
import { UserIdExistsError } from './errors/user-id-exists';

export class DeleteUserUseCase {
  static async execute(id: string): Promise<User> {
    const deleteUser = await prismaClient.user.delete({
      where: { id },
    });

    if (!id) {
      throw new UserIdExistsError(id);
    }

    return deleteUser;
  }
}
