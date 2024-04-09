import { http } from '@/http';
import { PersonData } from '@/interfaces/person-data';
import { useMutation } from 'react-query';

const postData = (data: PersonData) => {
  return http.post('create', data);
};

export const useIdentityMutation = () => {
  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: (data: PersonData) => postData(data),
  });

  return { mutate, isLoading, isError, isSuccess };
};
