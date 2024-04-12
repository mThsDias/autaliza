import { PersonData } from '@/interfaces/person-data';
import { createContext, useEffect, useState } from 'react';
import { AuthContextProps, ChildrenProps } from '@/@types/auth';
import { http } from '@/Services/http';

export const AuthContext = createContext({
  user: null,
  signed: false,
  setUser: (data: PersonData) => {
    data;
  },
  signIn: (data: PersonData) => {
    data;
  },
  signOut: () => {
    return;
  },
} as AuthContextProps);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<PersonData | null>(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      const token = sessionStorage.getItem('@Auth:token');

      if (token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUser({ token });
      }
    };

    loadingStoreData();
  }, []);

  const signIn = async ({ email, password }: PersonData) => {
    try {
      const response = await http.post('/login', { email, password });

      http.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.token}`;

      sessionStorage.setItem('@Auth:token', response.data.token);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    sessionStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, signed: !!user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
