import { Link } from 'react-router-dom';
import { footerLinks } from '../constants';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-400">
      <div className="flex max-md:flex-col justify-between flex-wrap gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <img src={logo} alt="Logo" className="object-contain" width={120} />
          <p className="text-base text-gray-700">
            Autaliza 2024 <br />
            Todos os direitos reservados&copy;
          </p>
        </div>

        <div className="flex text-base min-w-[170px]">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h2 className="font-bold">{item.title}</h2>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    to={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-400 sm:px-16 px-6 py-10">
        <p>@2024 Autaliza. Todos os direitos reservados</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link to="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link to="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};
