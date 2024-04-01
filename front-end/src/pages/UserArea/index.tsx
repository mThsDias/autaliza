import { Outlet } from 'react-router-dom';

export const UserArea = () => {
  return (
    <section>
      <div>
        <Outlet />
      </div>
    </section>
  );
};
