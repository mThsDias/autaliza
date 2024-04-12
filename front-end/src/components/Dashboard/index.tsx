import { MenuSidebar } from './MenuSidebar';
import { UserNavBar } from './UserNavBar';

export const Dashboard = () => {
  return (
    <section className="h-screen flex">
      <div className=" bg-green-500">
        <MenuSidebar />
      </div>
      <div className="flex-1">
        <UserNavBar />
      </div>
    </section>
  );
};
