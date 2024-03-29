import { useState } from 'react';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { ForgotPassword } from './ForgotPassword';
import { Register } from './Register';
import { SignIn } from './SignIn';

interface UserLoggedProps {
  userLogged: () => void;
}

export const Login = ({ userLogged }: UserLoggedProps) => {
  const [isCloseDialog, setIsCloseDialog] = useState(true);

  return (
    <>
      {isCloseDialog && (
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Login de usuário</DialogTitle>
            <DialogDescription>
              Faça login para acessar sua conta.
            </DialogDescription>
          </DialogHeader>
          <SignIn
            closeDialog={() => setIsCloseDialog(false)}
            logged={userLogged}
          />
          <ForgotPassword />
          <Register />
        </DialogContent>
      )}
    </>
  );
};
