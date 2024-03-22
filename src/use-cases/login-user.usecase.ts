import { LoginUserDTO } from '../dtos/login-user.dto';
import { prismaClient } from '../database/prisma-client';
import { UserAlreadyExistsError } from './errors/user-already-exists';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class LoginUserUseCase {
  static async execute({
    email,
    password,
  }: LoginUserDTO): Promise<string | void> {
    const userExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExists) {
      throw new UserAlreadyExistsError('E-mail ou senha inválidos');
    }

    const comparePassword = await bcrypt.compare(password, userExists.password);

    if (!comparePassword) {
      throw new UserAlreadyExistsError('E-mail ou senha inválidos');
    }

    const token = jwt.sign({ id: userExists.id }, process.env.JWT_PASSWORD!, {
      expiresIn: '8h',
    });

    return token;
  }
}
