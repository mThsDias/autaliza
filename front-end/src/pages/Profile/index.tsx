import { Auth } from '@/contexts/useAuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const Profile = () => {
  const { user } = useContext(Auth);

  const navigation = useNavigate();

  if (!user) {
    navigation('/');
  }

  return (
    <>
      <div>
        <p>Nome: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </>
  );
};
