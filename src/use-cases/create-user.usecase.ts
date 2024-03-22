import { CreateUserDTO } from '../dtos/create-user.dto';
import { User } from '../entities/User';
import { prismaClient } from '../database/prisma-client';
import { UserAlreadyExistsError } from './errors/user-already-exists';
import bcrypt from 'bcrypt';

export class CreateUserUseCase {
  static async execute({
    name,
    email,
    password,
  }: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new UserAlreadyExistsError(email);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User(name, email, hashPassword);

    await prismaClient.user.create({
      data: user,
    });
  }
}
