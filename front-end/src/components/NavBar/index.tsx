import { useState } from 'react';
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
import { UserArea } from '@/pages/UserArea';

export const NavBar = () => {
  const token = sessionStorage.getItem('token');

  const [isLogged, setIsLogged] = useState<boolean>(token != null);

  return (
    <nav className="flex items-center justify-between py-4 px-4">
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
        <UserArea userLogout={() => setIsLogged(false)} />
      )}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <SVGMenu aria-label="Menu" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Anúnciar</MenubarItem>
            <MenubarItem>Comprar</MenubarItem>
            <MenubarItem>Feedback</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};
