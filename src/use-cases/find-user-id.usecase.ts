import { User } from '../entities/user.entity';
import { prismaClient } from '../database/prisma-client';
import { UserIdExistsError } from './errors/user-id-exists';

export class FindUserIdUseCase {
  static async execute(id: string): Promise<Omit<User, 'password'>> {
    const userIdExists = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });

    if (!userIdExists) {
      throw new UserIdExistsError(id);
    }

    return {
      name: userIdExists.name,
      email: userIdExists.email,
    };
  }
}
