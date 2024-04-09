import { useContext } from 'react';
import { Auth } from '@/contexts/useAuthContext';
import { NavBarUser } from '../Navigation/NavBarUser';
import { NavBar } from '../Navigation/NavBar';
import { Footer } from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isLogged } = useContext(Auth);

  return (
    <div>
      {!isLogged ? <NavBar /> : <NavBarUser />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
