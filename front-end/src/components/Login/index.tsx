import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { ForgotPassword } from './ForgotPassword';
import { Register } from './Register';
import { SignIn } from './SignIn';

export const Login = () => {
  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login de usuário</DialogTitle>
          <DialogDescription>
            Faça login para acessar sua conta.
          </DialogDescription>
        </DialogHeader>
        <SignIn />
        <ForgotPassword />
        <Register />
      </DialogContent>
    </>
  );
};
