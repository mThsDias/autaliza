import { prismaClient } from '../database/prisma-client';
import { ForgetPasswordError } from './errors/forget-passeord-error';
import jwt from 'jsonwebtoken';
import { EmailService } from '../services/email-service.service';

export class ForgotPasswordUseCase {
  static async execute(email: string): Promise<void> {
    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!emailAlreadyExists) {
      throw new ForgetPasswordError('Email not found');
    }

    const resetToken = jwt.sign(
      { userId: emailAlreadyExists.id },
      process.env.JWT_PASSWORD!,
      { expiresIn: '1h' }
    );

    await EmailService.sendEmail(
      email,
      'renovação de senha',
      `<p>Clique no link para atualizar sua senha: <a href="http://localhost:5173/reset-password/${resetToken}">Clique aqui</a></p>`
    );
  }
}
