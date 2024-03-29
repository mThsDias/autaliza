import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterMain } from './pages/RouterMain';
import { Home } from './pages/Home';
import { NewPasswordReset } from './pages/NewPasswordReset';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterMain />}>
          <Route index element={<Home />} />
          <Route path="/reset-password/:token" element={<NewPasswordReset />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
