import { createContext, useState } from 'react';

interface CheckLoggedContextType {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckLogged = createContext({
  isLogged: false,
  setIsLogged: () => {},
} as CheckLoggedContextType);

export function CheckLoggedProvider({ children }: React.PropsWithChildren) {
  const token = sessionStorage.getItem('token');

  const [isLogged, setIsLogged] = useState<boolean>(token != null);

  return (
    <CheckLogged.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </CheckLogged.Provider>
  );
}
