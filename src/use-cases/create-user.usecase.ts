/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateUserDTO } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { prismaClient } from '../database/prisma-client';
import { UserlreadyExistsError } from './errors/user-already-exists';

export class CreateUserUseCase {
  static async execute({ name, email, password}: CreateUserDTO): Promise<void> {
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          email,
        },
      });

      if (userAlreadyExists) {
        throw new UserlreadyExistsError(email);
      }

      const user = new User(name, email, password);

      await prismaClient.user.create({
        data: user,
      });
    } 
  }

