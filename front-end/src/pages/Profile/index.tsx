import { Auth } from '@/contexts/useAuthContext';
import { useContext } from 'react';

export const Profile = () => {
  const { isError, isLoading, user } = useContext(Auth);

  if (isLoading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <p>Nome: {user?.name}</p>
        <p>Email: {user?.email}</p>
        {isError && <p>Erro ao carregar o perfil</p>}
      </div>
    </>
  );
};
