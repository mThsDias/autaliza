import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SignInUser } from '@/http/auth-services';
import { useQuery } from 'react-query';
import { Loader } from '@/components/Loader';

interface CloseDialogProps {
  closeDialog: () => void;
  logged: () => void;
}

export const SignIn = ({ closeDialog, logged }: CloseDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = useQuery(['signIn'], () => SignInUser({ email, password }), {
    enabled: false,
    onSuccess: (response: { token: string }) => {
      sessionStorage.setItem('token', response.token);
      setEmail('');
      setPassword('');
      logged();
      closeDialog();
    },
    onError: () => {
      console.log('Erro ao fazer login');
      setPassword('');
    },
    retry: 1,
    retryDelay: 1000,
    cacheTime: 0,
  });

  const { isLoading, isError } = signIn;

  const handleSubmitSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    signIn.refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitSignIn}>
      <div className="py-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="py-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {isError && (
        <div className="text-red-600 text-xs pb-4">
          E-mail ou senha inválidos.
        </div>
      )}
      <DialogFooter>
        <Button type="submit">Entrar</Button>
      </DialogFooter>
    </form>
  );
};
