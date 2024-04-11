import { Link } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import error from '@/assets/error.png';
import { useEffect, useState } from 'react';
import AOS from 'aos';

interface MessageErrorProps {
  title: string;
  description: string;
  href: string;
  descriptionLink?: string;
}

export default function MessageError({
  title,
  description,
  href,
  descriptionLink,
}: MessageErrorProps) {
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
          className="bg-red-100 border-red-400 flex items-start transition-opacity duration-500 ease-out opacity-100"
          data-aos="fade-right"
        >
          <img src={error} alt="check" className="w-6 h-6 mr-4" />
          <div>
            <AlertTitle className="text-red-800 mf-4">{title}</AlertTitle>

            <AlertDescription className="text-red-700">
              {description}
            </AlertDescription>

            <Link to={href} className="inline-block mt-4">
              <AlertDescription className="text-red-800 hover:underline">
                {descriptionLink}
              </AlertDescription>
            </Link>
          </div>
        </Alert>
      )}
    </>
  );
}
