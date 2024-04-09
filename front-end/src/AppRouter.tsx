import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from './contexts/useAuthContext';
import { AuthenticatedRoutes } from './routes/AuthenticatedRoutes';
import { NonAuthenticatedRoutes } from './routes/NonAuthenticatedRoutes';

export const AppRouter = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<NonAuthenticatedRoutes />} />
            <Route path="/app/*" element={<AuthenticatedRoutes />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};
