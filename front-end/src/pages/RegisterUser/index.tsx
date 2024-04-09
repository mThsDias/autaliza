import { RegisterForm } from '@/components/Auth/RegisterForm';

export const RegisterUser = () => {
  return (
    <section className="flex items-center justify-center  h-screen">
      <div className="w-full max-w-md px-4">
        <RegisterForm />
      </div>
    </section>
  );
};
