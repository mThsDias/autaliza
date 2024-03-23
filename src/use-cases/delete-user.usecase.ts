import { User } from '../entities/user.entity';
import { prismaClient } from '../database/prisma-client';
import { UserIdExistsError } from './errors/user-id-exists';

export class DeleteUserUseCase {
  static async execute(id: string): Promise<Omit<User, 'password'>> {
    const existingUser = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new UserIdExistsError(id);
    }

    const deleteUser = await prismaClient.user.delete({
      where: { id },
    });

    return {
      name: deleteUser.name,
      email: deleteUser.email,
    };
  }
}
