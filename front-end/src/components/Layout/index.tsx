import { NavBar } from '../Navigation/NavBar';
import { Footer } from '../Footer';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/useAuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { signed } = useContext(AuthContext);

  return (
    <>
      {signed ? '' : <NavBar />}
      <main>{children}</main>
      <Footer />
    </>
  );
};
