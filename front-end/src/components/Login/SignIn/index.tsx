import { useContext, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/Loader';
import { useMutation } from 'react-query';
import { IUserLogin } from '@/interfaces/user.interface';
import { SignInUser } from '@/http/services';
import 'react-toastify/dist/ReactToastify.css';
import { Auth } from '@/contexts/useAuthContext';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLogged } = useContext(Auth);

  const signInUser = useMutation((user: IUserLogin) => SignInUser(user), {
    onSuccess: (data) => {
      sessionStorage.setItem('token', data);
      setIsLogged(true);
    },
  });

  const { isLoading, isError } = signInUser;

  const handleSubmitSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signInUser.mutate({ email, password });
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
