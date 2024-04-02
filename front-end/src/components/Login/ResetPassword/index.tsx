import { Loader } from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { ResetPasswordUser } from '@/http/services';
import { useState } from 'react';
import { useQuery } from 'react-query';

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setPasswordConfirm] = useState('');

  const resetPassword = useQuery(
    ['resetPassword'],
    () => ResetPasswordUser(newPassword, confirmPassword),
    {
      enabled: false,
      onSuccess: (response: { token: string }) => {
        sessionStorage.setItem('token', response.token);
        setNewPassword('');
        setPasswordConfirm('');
      },
      onError: () => {
        console.log('Erro ao fazer login');
        setNewPassword('');
      },
      retry: 1,
      retryDelay: 1000,
      cacheTime: 0,
    }
  );

  const { isLoading, isError } = resetPassword;

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword.refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

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
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={confirmPassword}
        />
      </div>
      {isError && (
        <div className="text-red-600 text-xs pb-4">As senhas não conferem.</div>
      )}
      <Button variant={'default'}>Confirmar</Button>
    </form>
  );
};
