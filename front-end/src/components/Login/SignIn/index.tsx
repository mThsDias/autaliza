import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SignIn = () => {
  return (
    <form>
      <div className="py-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input type="password" id="password" name="password" required />
      </div>
    </form>
  );
};
