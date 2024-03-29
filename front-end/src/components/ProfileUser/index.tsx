import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../ui/menubar';

interface LogoutProps {
  userLogout: () => void;
}

export const ProfileUser = ({ userLogout }: LogoutProps) => {
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.reload();

    userLogout();
  };

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Avatar>
              <AvatarImage />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Perfil</MenubarItem>
            <MenubarItem>Novo anúncio</MenubarItem>
            <MenubarItem>Meus anúncios</MenubarItem>
            <MenubarItem onClick={handleLogout}>Sair</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};
