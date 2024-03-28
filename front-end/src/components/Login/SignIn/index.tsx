import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ForgotPassword } from '../ForgotPassword';

export const SignIn = () => {
  return (
    <DialogContent className="sm:max-w-[425px] ">
      <DialogHeader>
        <DialogTitle>Login de usuário</DialogTitle>
        <DialogDescription>
          Faça login para acessar sua conta.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="py-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" name="password" required />
        </div>
      </form>
      <DialogFooter>
        <Button type="submit">Entrar</Button>
      </DialogFooter>
      <ForgotPassword />
    </DialogContent>
  );
};
