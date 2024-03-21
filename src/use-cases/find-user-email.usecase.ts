import { User } from '../entities/user.entity';
import { prismaClient } from '../database/prisma-client';
import { UserEmailExistsError } from './errors/user-email-exists';

export class FindUserEmailUseCase {
  static async execute(email: string): Promise<User> {
    const userEmailExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (!userEmailExists) {
      throw new UserEmailExistsError(email);
    }

    return userEmailExists;
  }
}
