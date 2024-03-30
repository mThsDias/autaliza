import { NavBar } from '@/components/NavBar';
import { Outlet } from 'react-router-dom';

export const UserArea = () => {
  return (
    <section>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};
