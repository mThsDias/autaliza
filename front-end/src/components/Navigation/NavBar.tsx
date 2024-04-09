import { Link } from 'react-router-dom';
import { navigation } from '@/components/constants';
import { CustomButton } from '../CustomButton';
import { useState } from 'react';
import { SVGMenu } from '@/assets/svgs/SVGMenu';
import userIcon from '@/assets/icons/user.png';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-n-6 w-full absolute z-10 bg-white">
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <Link to="/">
          <h1 className="text-2xl font-bold">Logo</h1>
        </Link>

        <div
          className={`md:flex ${
            menuOpen
              ? 'fixed inset-0 bg-white flex flex-col items-center justify-center'
              : 'hidden'
          } md:flex gap-10`}
        >
          {navigation.map((item) => (
            <div className="hover:text-blue-500 text-base" key={item.title}>
              <Link
                onClick={() => setMenuOpen(false)}
                to={item.url}
                className="block mt-4 md:inline-block md:mt-0  hover:text-blue-700"
              >
                {item.title}
              </Link>
            </div>
          ))}

          {menuOpen && (
            <CustomButton
              title="X"
              variant={'destructive'}
              handleClick={() => setMenuOpen(false)}
            />
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/login" className="flex items-center">
            <CustomButton
              title="Login"
              variant={'outline'}
              textStyles="text-myColors-blue text-base"
              containerStyles="flex gap-2 items-center"
              rightIcon={userIcon}
            />
          </Link>

          <div className="md:hidden">
            <SVGMenu onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
      </nav>
    </header>
  );
};
