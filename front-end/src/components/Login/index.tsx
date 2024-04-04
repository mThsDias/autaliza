import { Link } from 'react-router-dom';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { SVGSignIn } from '@/shared/icons/SVGSignIn';
import { SVGCreateuser } from '@/shared/icons/SVGCreateUser';

export const Login = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Bem-vindo </DialogTitle>
        <DialogDescription>
          Faça login para acessar sua conta e aproveitar todos os recursos.
        </DialogDescription>
      </DialogHeader>
      <Link to="/login">
        <Button variant="default" className="flex gap-2 w-full">
          Entrar <SVGSignIn />
        </Button>
      </Link>
      <Link to="/create-user">
        <Button variant="default" className="flex gap-2 w-full">
          Criar conta <SVGCreateuser />
        </Button>
      </Link>
    </DialogContent>
  );
};
