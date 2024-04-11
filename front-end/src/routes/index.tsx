import { ForgotPassword } from '@/pages/ForgotPassword';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
// import { NewPasswordReset } from '@/pages/NewPasswordReset';
import { RegisterUser } from '@/pages/RegisterUser';
import { SignIn } from '@/pages/SignIn';
import { Routes, Route } from 'react-router-dom';

export const NonAuthenticatedRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/create-user" element={<RegisterUser />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/reset-password/:token" element={<NewPasswordReset />} /> */}
      </Routes>
    </Layout>
  );
};
