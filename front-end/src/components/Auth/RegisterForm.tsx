import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RegisterSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { z } from 'zod';
import { useState } from 'react';
import { Loader } from '../Loader';
import { CardWrapper } from './CardWrapper';
import { useIdentityMutation } from '@/hooks/useIdentityMutation';
import MessageSucess from '../AlertMessagens/MessageSucess';

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { mutate, isSuccess } = useIdentityMutation();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    try {
      mutate({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    form.reset();
  };

  return (
    <CardWrapper
      label="Crie sua conta para começar a usar o sistema."
      title="Crie sua conta"
      backButtonHref="/login"
      backButtonLabel="Já tem uma conta? Faça login."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu nome" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      placeholder="exemplo@gmail.com"
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmação de senha</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="absolute top-0 right-0 mr-4 mt-4">
            {isSuccess && (
              <MessageSucess
                title="Conta criada com sucesso!"
                description="Agora você já pode fazer seu login."
                href="/login"
                descriptionLink="Fazer login"
              />
            )}
          </div>
          <Button type="submit" className="w-full">
            {loading ? <Loader /> : 'Criar conta'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
