import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { http } from '@/http';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface CloseDialogProps {
  closeDialog: () => void;
  logged: () => void;
}

export const SignIn = ({ closeDialog, logged }: CloseDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    http
      .post('login', user)
      .then((response) => {
        sessionStorage.setItem('token', response.data.token);
        setEmail('');
        setPassword('');
        logged();
        closeDialog();
      })
      .catch(() => {
        console.log('Erro ao fazer login');
      });
  };

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
      <DialogFooter>
        <Button type="submit">Entrar</Button>
      </DialogFooter>
    </form>
  );
};
