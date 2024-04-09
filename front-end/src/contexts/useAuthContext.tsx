import { PersonData } from '@/interfaces/person-data';
import { createContext, useState } from 'react';
import { useQuery } from 'react-query';

interface AuthContextType {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  isError: boolean;
  user: PersonData | undefined | null;
}

export const Auth = createContext<AuthContextType>({
  isLogged: false,
  setIsLogged: () => {},
  isLoading: false,
  isError: false,
  user: undefined,
});

export function AuthProvider({ children }: React.PropsWithChildren) {
  const token = sessionStorage.getItem('token');
  const [isLogged, setIsLogged] = useState<boolean>(token != null);

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(['user'], {
    onSuccess: () => {},
    onError: () => {},
    retry: 0,
    retryDelay: 1000,
    cacheTime: 0,
  });

  return (
    <Auth.Provider
      value={{
        isLogged,
        setIsLogged,
        isLoading,
        isError,
        user: user as PersonData | null | undefined,
      }}
    >
      {children}
    </Auth.Provider>
  );
}
