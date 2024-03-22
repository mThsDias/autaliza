import { User } from '../entities/User';
import { prismaClient } from '../database/prisma-client';
import { UserIdExistsError } from './errors/user-id-exists';

export class FindUserIdUseCase {
  static async execute(id: string): Promise<User> {
    const userIdExists = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });

    if (!userIdExists) {
      throw new UserIdExistsError(id);
    }

    return userIdExists;
  }
}
