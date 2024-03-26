import { User } from '../entities/user.entity';
import { prismaClient } from '../database/prisma-client';
import { UpdateUserDTO } from '../dtos/update-user.dtos';
import { UserUpdateExistsError } from './errors/update-user-exists';
import bcrypt from 'bcrypt';

export class UpdateUserUseCase {
  static async execute({ password, name, id }: UpdateUserDTO): Promise<string> {
    const userToUpdate = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!userToUpdate) {
      throw new UserUpdateExistsError(id);
    }

    let updatedUser: User;

    if (password) {
      const hashPassword = await bcrypt.hash(password, 10);

      updatedUser = await prismaClient.user.update({
        where: { id },
        data: { name, password: hashPassword },
      });
    } else {
      updatedUser = await prismaClient.user.update({
        where: { id },
        data: { name },
      });
    }

    return updatedUser.name;
  }
}
