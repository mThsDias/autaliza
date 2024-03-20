import { Request, Response } from 'express';
import { CreateUserDTO } from './create-user.dto';
import { CreateUserUseCase } from './create-user.use-case';

export class CreateUserController {
  static async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const data: CreateUserDTO = { name, email, password };

    try {
      const user = CreateUserUseCase.execute(data);
      res.status(201).json({ message: 'Usuário criado com sucesso', user });
    } catch (error) {
      res.status(500).json({ error: 'Erro inesperado' });
    }
  }
}
