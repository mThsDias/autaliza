import { Link } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { menuSidebar } from '../constants';
import logo from '@/assets/logo.png';
import logaut from '@/assets/sair.png';

export const MenuSidebar = () => {
  return (
    <article className="bg-slate-300 inline-block px-8 h-full relative  border-r border-current">
      <div className="h-full">
        <img src={logo} alt="Logo autaliza" width={120} className="mt-5" />
        <nav>
          <ul className="flex flex-col gap-2 mt-20">
            {menuSidebar.map((item) => (
              <Link to={item.url} key={item.title}>
                <li className="flex gap-2 hover:bg-white rounded-md px-2 py-3">
                  <div>{item.icon}</div>
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <CustomButton
        title="Sair"
        variant={'outline'}
        containerStyles="absolute bottom-32"
        rightIcon={logaut}
      />
    </article>
  );
};
