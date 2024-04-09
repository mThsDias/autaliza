import { Auth } from '@/contexts/useAuthContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const Profile = () => {
  const { isLogged, user } = useContext(Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  return (
    <section className="bg-green-400">
      <div>
        <p>Nome: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </section>
  );
};
