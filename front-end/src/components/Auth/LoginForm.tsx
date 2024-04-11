import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { LoginSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { z } from 'zod';
import { useContext, useState } from 'react';
import { CardWrapper } from './CardWrapper';
import { Loader } from '../Loader';
// import MessageSucess from '../AlertMessagens/MessageSucess';
import { AuthContext } from '@/contexts/useAuthContext';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (
    data: Omit<z.infer<typeof LoginSchema>, 'name' | 'password_confirmation'>
  ) => {
    setLoading(true);
    try {
      signIn(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    form.reset();
  };

  return (
    <CardWrapper
      title="Acesso do usuário"
      label="Entre com suas credenciais "
      backButtonHref="/forgot-password"
      backButtonLabel="Esqueceu a senha?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="example@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <div className="absolute top-0 right-0 mr-4 mt-4">
            {isSuccess && (
              <MessageSucess
                title="Login efetuado com sucesso!"
                description="Você será redirecionado para a página inicial."
                href="/"
              />
            )}
          </div> */}
          <Button type="submit" className="w-full">
            {loading ? <Loader /> : 'Login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
