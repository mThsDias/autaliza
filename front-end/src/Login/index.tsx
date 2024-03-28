import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Login = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" name="email" required />
      <Label htmlFor="password">Senha</Label>
      <Input type="password" id="password" name="password" required />
    </form>
  );
};
