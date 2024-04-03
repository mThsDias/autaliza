import { Link } from 'react-router-dom';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { ForgotPassword } from './ForgotPassword';
import { SignIn } from './SignIn';
import { Button } from '../ui/button';

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
        <Link to="/create-user" className="flex items-center justify-center">
          <Button variant="ghost">Criar conta</Button>
        </Link>
      </DialogContent>
    </>
  );
};
