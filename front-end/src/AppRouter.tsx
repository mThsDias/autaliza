import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterMain } from './pages/router-main';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterMain />}>
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
