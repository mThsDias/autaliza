import { Link } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import check from '@/assets/check.png';
import { useEffect, useState } from 'react';
import AOS from 'aos';

interface MessageSucessProps {
  title: string;
  description: string;
  href: string;
  descriptionLink?: string;
}

export default function MessageSucess({
  title,
  description,
  href,
  descriptionLink,
}: MessageSucessProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Alert
          className="bg-green-100 border-green-400 flex items-start transition-opacity duration-500 ease-out opacity-100"
          data-aos="fade-right"
        >
          <img src={check} alt="check" className="w-6 h-6 mr-4" />
          <div>
            <AlertTitle className="text-green-800 mf-4">{title}</AlertTitle>

            <AlertDescription className="text-green-700">
              {description}
            </AlertDescription>

            <Link to={href} className="inline-block mt-4">
              <AlertDescription className="text-green-800 hover:underline">
                {descriptionLink}
              </AlertDescription>
            </Link>
          </div>
        </Alert>
      )}
    </>
  );
}
