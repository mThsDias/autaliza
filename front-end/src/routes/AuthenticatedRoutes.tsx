import { Layout } from '@/components/Layout';
import { AuthContext } from '@/contexts/useAuthContext';
import { Profile } from '@/pages/Profile';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthenticatedRoutes = () => {
  const { signed } = useContext(AuthContext);

  return <Layout>{signed ? <Profile /> : <Navigate to="/login" />}</Layout>;
};
