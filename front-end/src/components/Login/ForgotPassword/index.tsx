import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { http } from '@/http';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email,
    };

    http
      .post('forgot-password', user)
      .then(() => {
        alert('Email enviado com sucesso');
        setEmail('');
      })
      .catch((error) => {
        alert('Erro ao enviar email');
        console.error(error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Esqueceu sua senha?</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Recuperação de senha</DialogTitle>
          <DialogDescription>
            Digite seu email para recuperar sua senha.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleForgot}>
          <div className="py-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Enviar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
