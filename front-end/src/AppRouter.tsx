import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterMain } from './pages/RouterMain';
import { Home } from './pages/Home';
import { NewPasswordReset } from './pages/NewPasswordReset';
import { UserArea } from './pages/UserArea';
import { Profile } from './pages/Profile';
import { QueryClientProvider, QueryClient } from 'react-query';

export const AppRouter = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterMain />}>
            <Route index element={<Home />} />
            <Route
              path="/reset-password/:token"
              element={<NewPasswordReset />}
            />
            <Route path="/profile" element={<UserArea />}>
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/new-announcement" element={} />
            <Route path="/my-announcement" element={} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
