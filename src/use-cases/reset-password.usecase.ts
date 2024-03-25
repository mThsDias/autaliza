import { prismaClient } from '../database/prisma-client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ForgetPasswordError } from './errors/forget-passeord-error';

export class ResetPasswordUseCase {
  static async execute(token: string, newPassword: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedToken: any = jwt.verify(token, process.env.JWT_PASSWORD!);
    const userId = decodedToken.userId;

    const user = await prismaClient.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new ForgetPasswordError('User not found');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });
  }
}
