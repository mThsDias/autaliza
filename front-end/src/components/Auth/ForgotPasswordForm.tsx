import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ForgotPasswordSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { z } from 'zod';
import { useState } from 'react';
import { CardWrapper } from './CardWrapper';
import { useForgotPasswordMutate } from '@/hooks/useUserMutate';
import MessageSucess from '../AlertMessagens/MessageSucess';
import MessageError from '../AlertMessagens/MessageError';
import { Loader } from '../Loader';

export const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const { mutate, isSuccess, isError } = useForgotPasswordMutate();

  const form = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof ForgotPasswordSchema>) => {
    setLoading(true);
    try {
      mutate(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      label="Esqueceu sua senha?"
      title="Recuperar senha"
      backButtonHref="/login"
      backButtonLabel="Lembrou a senha? Faça login aqui."
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
          </div>

          <div className="absolute top-0 left-0 mr-4 mt-4">
            {isSuccess && (
              <MessageSucess
                title="E-mail enviado!"
                description="Verifique sua caixa de entrada para redefinir sua senha."
                href="/login"
                descriptionLink="Fazer login"
              />
            )}

            {isError && (
              <MessageError
                title="Erro ao enviar e-mail!"
                description="Verifique se o e-mail está correto."
                href="/forgot-password"
                descriptionLink="Tente novamente"
              />
            )}
          </div>

          <Button type="submit" className="w-full">
            {loading ? <Loader /> : 'Enviar'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
