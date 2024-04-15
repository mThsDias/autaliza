import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { AuthContext } from '@/contexts/useAuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '@/hooks/useUserData';

export const NavBarUser = () => {
  const { signOut } = useContext(AuthContext);
  const { data } = useUserData();

  return (
    <header>
      <nav>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>
                  {data?.name?.slice(0, 1).toLocaleUpperCase()}
                </AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <Link to="/">
                <MenubarItem>Início</MenubarItem>
              </Link>
              <Link to="/app/profile">
                <MenubarItem>Perfil</MenubarItem>
              </Link>
              <MenubarItem onClick={signOut}>Sair</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </nav>
    </header>
  );
};
