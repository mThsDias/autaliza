import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useQuery } from 'react-query';
import { ForgotPasswordUser } from '@/http/services';
import { Loader } from '@/components/Loader';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const forgotPassword = useQuery(
    ['forgotPassword'],
    () => ForgotPasswordUser(email),
    {
      enabled: false,
      onSuccess: () => {
        setIsEmailSent(true);
        setEmail('');
      },
      onError: () => {
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
    <section className="flex items-center justify-center  h-screen">
      <div className="w-full max-w-md px-4">
        <h1 className="font-bold text-xl">Esqueceu a senha</h1>
        <p className="text-sm text-gray-500">
          Informe seu email para recuperar a senha.
        </p>
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
          {isEmailSent && (
            <p className="text-green-600 flex items-center gap-1 pb-4">
              Email enviado com sucesso!
            </p>
          )}
          <DialogFooter>
            <Button type="submit">Enviar</Button>
          </DialogFooter>
        </form>
      </div>
    </section>
  );
};
