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
import { useQuery } from 'react-query';
import { ForgotPasswordUser } from '@/http/services';
import { Loader } from '@/components/Loader';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const forgotPassword = useQuery(
    ['forgotPassword'],
    () => ForgotPasswordUser(email),
    {
      enabled: false,
      onSuccess: () => {
        setEmail('');
      },
      retry: 1,
      retryDelay: 1000,
      cacheTime: 0,
    }
  );

  const { isLoading, isError } = forgotPassword;

  const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgotPassword.refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

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
          {isError && (
            <div className="text-red-600 text-xs pb-4">
              Email não encontrado.
            </div>
          )}
          <DialogFooter>
            <Button type="submit">Enviar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
