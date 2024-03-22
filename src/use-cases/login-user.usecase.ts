import { LoginUserDTO } from '../dtos/login-user.dtos';
import { prismaClient } from '../database/prisma-client';
import { UserAlreadyExistsError } from './errors/user-already-exists';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class LoginUserUseCase {
  static async execute({ email, password }: LoginUserDTO): Promise<{
    token: string;
    name: string;
    email: string;
  } | void> {
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

    return { token, name: userExists.name, email: userExists.email };
  }
}
