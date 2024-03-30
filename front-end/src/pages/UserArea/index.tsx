import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Link, Outlet } from 'react-router-dom';

interface LogoutProps {
  userLogout: () => void;
}

export const UserArea = ({ userLogout }: LogoutProps) => {
  const handleLogout = () => {
    sessionStorage.removeItem('token');

    userLogout();
  };

  return (
    <section>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <Link to="/profile">
                <MenubarItem>Perfil</MenubarItem>
              </Link>
              <MenubarItem>Novo anúncio</MenubarItem>
              <MenubarItem>Meus anúncios</MenubarItem>
              <MenubarItem onClick={handleLogout}>Sair</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};
