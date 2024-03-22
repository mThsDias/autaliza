import { prismaClient } from '../database/prisma-client';
import { JwtPayload } from '../dtos/jwt-payload.dtos';
import { User } from '../entities/User';
import { UnauthorizedError } from './errors/unauthorized-error';

export class ProfileUserUseCase {
  static async execute({ id }: JwtPayload): Promise<User> {
    const userExists = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new UnauthorizedError('Unauthorized');
    }

    return {
      name: userExists.name,
      email: userExists.email,
      password: '#',
    };
  }
}
