import { CreateUserDTO } from './create-user.dto';
import { UserValidator } from './create-user.validator';
import { User } from './user.entity';

export class CreateUserUseCase {
  static execute(data: CreateUserDTO): User {
    if (!UserValidator.validate(data)) {
      throw new Error('Dados inválidos');
    }

    const { name, email, password } = data;
    const user = new User(name, email, password);
    return user;
  }
}
