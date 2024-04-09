import { ForgotPasswordForm } from '@/components/Auth/ForgotPasswordForm';

export const ForgotPassword = () => {
  return (
    <section className="flex items-center justify-center  h-screen">
      <div className="w-full max-w-md px-4">
        <ForgotPasswordForm />
      </div>
    </section>
  );
};
