import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from '@/contexts/useAuthContext';
import { useContext } from 'react';

export const NavBarUser = () => {
  const { setIsLogged, user } = useContext(Auth);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLogged(false);
    navigate('/');
  };

  return (
    <header>
      <nav>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>{user?.name.slice(0, 1)}</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <Link to="/">
                <MenubarItem>Início</MenubarItem>
              </Link>
              <Link to="/app/profile">
                <MenubarItem>Perfil</MenubarItem>
              </Link>
              <MenubarItem onClick={handleLogout}>Sair</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </nav>
    </header>
  );
};
