import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../ui/menubar';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { SVGUser } from '@/shared/icons/SVGUser';
import { SVGMenu } from '@/shared/icons/SVGMenu';
import { Login } from '../Login';
import { Link, useNavigate } from 'react-router-dom';

interface LogoutProps {
  userLogout?: () => void;
}

export const NavBar = ({ userLogout }: LogoutProps) => {
  const token = sessionStorage.getItem('token');

  const [isLogged, setIsLogged] = useState<boolean>(token != null);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLogged(false);

    if (userLogout) {
      userLogout();
    }

    navigate('/');
  };

  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-zinc-900">
      {!isLogged ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="flex gap-1 hover:bg-zinc-700">
              <SVGUser />
              <p className="text-white">Login</p>
            </Button>
          </DialogTrigger>
          <Login userLogged={() => setIsLogged(true)} />
        </Dialog>
      ) : (
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
      )}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <SVGMenu aria-label="Menu" />
          </MenubarTrigger>
          <MenubarContent>
            <Link to={'/'}>
              <MenubarItem>Início</MenubarItem>
            </Link>
            <MenubarItem>Anúnciar</MenubarItem>
            <MenubarItem>Comprar</MenubarItem>
            <MenubarItem>Feedback</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};
