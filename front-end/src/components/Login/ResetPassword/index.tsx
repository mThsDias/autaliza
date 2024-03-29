import { Button } from '@/components/ui/button';
import { http } from '@/http';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams<{ token: string }>();

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      newPassword,
      confirmPassword,
    };

    http
      .post(`reset-password/${token}`, user)
      .then(() => {
        setNewPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleReset}>
      <div>
        <label htmlFor="newPassword">Nova senha</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          required
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirme a nova senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </div>
      <Button variant={'default'}>Confirmar</Button>
    </form>
  );
};
