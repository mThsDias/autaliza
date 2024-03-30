import { Outlet } from 'react-router-dom';

export const RouterMain = () => {
  return (
    <section>
      <div>
        <Outlet />
      </div>
    </section>
  );
};
