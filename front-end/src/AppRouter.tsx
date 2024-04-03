import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterMain } from './pages/RouterMain';
import { Home } from './pages/Home';
import { NewPasswordReset } from './pages/NewPasswordReset';
import { UserArea } from './pages/UserArea';
import { Profile } from './pages/Profile';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from './contexts/useAuthContext';
import { RegisterUser } from './pages/RegisterUser';

export const AppRouter = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouterMain />}>
              <Route index element={<Home />} />
              <Route path="/create-user" element={<RegisterUser />} />
              <Route
                path="/reset-password/:token"
                element={<NewPasswordReset />}
              />
              <Route path="/profile" element={<UserArea />}>
                <Route index element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};
