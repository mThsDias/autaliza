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

export const ForgotPassword = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Esqueceu sua senha?</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Recuperação de senha</DialogTitle>
          <DialogDescription>
            Digite seu email para recuperar sua senha.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="py-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
