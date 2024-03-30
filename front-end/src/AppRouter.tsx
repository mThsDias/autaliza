import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterMain } from './pages/RouterMain';
import { Home } from './pages/Home';
import { NewPasswordReset } from './pages/NewPasswordReset';
import { UserArea } from './pages/UserArea';
import { Profile } from './pages/Profile';

interface LogoutProps {
  userLogout: () => void;
}

export const AppRouter = ({ userLogout }: LogoutProps) => {
  const handleLogout = () => {
    sessionStorage.removeItem('token');

    userLogout();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterMain />}>
          <Route index element={<Home />} />
          <Route path="/reset-password/:token" element={<NewPasswordReset />} />
          <Route
            path="/profile"
            element={<UserArea userLogout={handleLogout} />}
          >
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/new-announcement" element={} />
            <Route path="/my-announcement" element={} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
