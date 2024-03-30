import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { http } from '@/http';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const NewPasswordReset = () => {
  const { token } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      password,
      confirmPassword,
    };

    http
      .post(`reset-password/${token}`, user)
      .then(() => {
        alert('Senha redefinida com sucesso!');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        alert('Erro ao redefinir senha');
        console.error(error);
      });
  };

  return (
    <section className="px-9 py-7">
      <h1>Redefina sua senha</h1>
      <form onSubmit={handleNewPasswordReset}>
        <div className="py-2">
          <Label htmlFor="password">Nova senha</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="py-2">
          <Label htmlFor="confirmPassword">Confirme a nova senha</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button variant={'default'} type="submit">
          Redefinir senha
        </Button>
      </form>
    </section>
  );
};
