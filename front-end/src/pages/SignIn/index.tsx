import { LoginForm } from '@/components/Auth/LoginForm';
import { CustomButton } from '@/components/CustomButton';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-lg pb-5">
        <LoginForm />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-gray-500 text-sm">Novo na Autaliza?</h1>
        <Link to="/create-user">
          <CustomButton
            title="Crie sua conta na Autaliza"
            variant={'outline'}
          />
        </Link>
      </div>
    </section>
  );
};
