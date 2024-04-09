import { Layout } from '@/components/Layout';
import { Profile } from '@/pages/Profile';
import { Routes, Route } from 'react-router-dom';

export const AuthenticatedRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
};
