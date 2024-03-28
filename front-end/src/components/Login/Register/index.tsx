import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Register = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Criar conta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastre-se</DialogTitle>
          <DialogDescription>
            Crie uma conta para acessar todos os recursos.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="py-3">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="py-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div className="py-3">
            <Label htmlFor="password">password</Label>
            <Input type="password" id="password" name="password" required />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Criar conta</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
