import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Profile } from '@/pages/Profile';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AuthenticatedRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};
