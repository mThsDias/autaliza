import { useUserData } from '@/hooks/useUserData';
import { Panel } from './Panel';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import user from '@/assets/icons/user.png';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CustomButton } from '@/components/CustomButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const UserPanel = () => {
  const { data } = useUserData();

  return (
    <Panel>
      <div className="flex justify-between items-center border rounded-2xl py-4 px-8">
        <div className="flex items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user} alt="Imagem do usuario" />
          </Avatar>

          <div>
            <h2>{data?.name}</h2>
            <h2>{data?.email}</h2>
          </div>
        </div>

        <div>
          <Dialog>
            <DialogTrigger>
              <CustomButton title="Editar Perfil" variant={'outline'} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar Perfil</DialogTitle>
                <DialogDescription>
                  Faça alterações em seu perfil aqui. Clique em salvar quando
                  terminar.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-5">
                <div>
                  <Label>Nome</Label>
                  <Input placeholder="Digite seu nome" />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input placeholder="Digite seu email" />
                </div>
              </form>

              <DialogFooter>
                <div className="flex justify-between gap-4">
                  <CustomButton title="Salvar" />
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Panel>
  );
};
