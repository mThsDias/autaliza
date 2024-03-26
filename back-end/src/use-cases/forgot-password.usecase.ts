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
      'Reset password',
      `Use this link to reset your password: localhost:3000/reset-password/${resetToken}`
    );
  }
}
