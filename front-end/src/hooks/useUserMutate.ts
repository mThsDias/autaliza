import { http } from '@/Services/http';
import { PersonData } from '@/interfaces/person-data';
import { useMutation } from '@tanstack/react-query';

const register = async (data: PersonData) => {
  return await http.post('/create', data);
};

export const useUserMutate = () => {
  const mutate = useMutation({
    mutationFn: register,
  });

  return mutate;
};

const forgotPassword = async (data: PersonData) => {
  return await http.post('/forgot-password', data);
};

export const useForgotPasswordMutate = () => {
  const mutate = useMutation({
    mutationFn: forgotPassword,
  });

  return mutate;
};
