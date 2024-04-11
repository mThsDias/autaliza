import { PersonData } from '@/interfaces/person-data';

export interface AuthContextProps {
  user: PersonData | null;
  signed: boolean;
  setUser: React.Dispatch<React.SetStateAction>;
  signIn: (data: PersonData) => void;
  signOut: () => void;
}

export interface ChildrenProps {
  children: React.ReactNode;
}
