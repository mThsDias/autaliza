import { RegisterForm } from '@/components/Auth/RegisterForm';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = () => {
  return (
    <section className="flex items-center justify-center  h-screen">
      <div className="w-full max-w-lg">
        <RegisterForm />
      </div>
    </section>
  );
};
