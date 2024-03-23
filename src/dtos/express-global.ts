import { User } from '../entities/user.entity';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      user: Partial<User>;
    }
  }
}
