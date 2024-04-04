import { Loader } from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreateUser } from '@/http/services';
import { IUserCreate } from '@/interfaces/user.interface';
import { useState } from 'react';
import { useMutation } from 'react-query';

export const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerUser = useMutation((user: IUserCreate) => CreateUser(user), {
    onSuccess: () => {
      alert('Usuário criado com sucesso');
    },
    onError: () => {
      alert('Erro ao criar usuário');
    },
  });

  const { isLoading, isError } = registerUser;

  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser.mutate({ name, email, password, confirmPassword });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="mx-4 my-4">
      <div className="py-4">
        <h1 className="font-bold text-xl">Crie sua conta</h1>
        <p className="text-sm text-gray-500">
          Preencha os campos abaixo para criar sua conta.
        </p>
      </div>
      <form onSubmit={handleSubmitRegister}>
        <div className="py-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="py-2">
          <Label htmlFor="confirmPassword">Confirmar senha</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {isError && (
          <div className="text-red-600 text-xs pb-4">Senhas não conferem.</div>
        )}
        <DialogFooter className="pt-4">
          <Button type="submit">Criar</Button>
        </DialogFooter>
      </form>
    </section>
  );
};
