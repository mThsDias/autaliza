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
import { Loader } from '../Loader';
import { CardWrapper } from './CardWrapper';
import MessageSucess from '../AlertMessagens/MessageSucess';
import { useUserMutate } from '@/hooks/useUserMutate';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageError from '../AlertMessagens/MessageError';

export const RegisterForm = () => {
  const [isPasswordMismatch, isSetPasswordMismatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { mutate, isSuccess, isError } = useUserMutate();

  const navigation = useNavigate();

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
    setIsLoading(true);

    if (data.password !== data.confirmPassword) {
      isSetPasswordMismatch(true);

      form.reset({
        email: data.email,
        name: data.name,
        password: '',
        confirmPassword: '',
      });

      setIsLoading(false);

      return;
    }

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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigation('/login');
        form.reset();
      }, 5000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

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

          <div className="absolute top-0 left-0 mr-4 mt-4">
            {isSuccess && (
              <MessageSucess
                title="Conta criada com sucesso!"
                description="Agora você já pode fazer seu login."
                href="/login"
                descriptionLink="Fazer login"
              />
            )}

            {isError && (
              <MessageError
                title="Erro ao criar conta!"
                description="E-mail já cadastrado. Tente novamente com outro e-mail."
                href="/register"
                descriptionLink="Tentar novamente"
              />
            )}

            {isPasswordMismatch && (
              <MessageError
                title="Erro ao criar conta!"
                description="As senhas não conferem. Tente novamente."
                href="/register"
                descriptionLink="Tentar novamente"
              />
            )}
          </div>

          <Button type="submit" className="w-full">
            {isLoading ? <Loader /> : 'Criar conta'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
