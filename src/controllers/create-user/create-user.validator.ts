import { CreateUserDTO } from './create-user.dto';

export class UserValidator {
  static validate(data: CreateUserDTO): boolean {
    if (!data.name || !data.password || !data.email) {
      return false;
    }
    return true;
  }
}
