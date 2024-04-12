import { NavBarUser } from '../Navigation/NavBarUser';

export const UserNavBar = () => {
  return (
    <header className="bg-slate-300 py-5 px-32">
      <div className="flex items-center justify-between">
        <h1>Dashboard</h1>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <NavBarUser />
        </div>
      </div>
    </header>
  );
};
