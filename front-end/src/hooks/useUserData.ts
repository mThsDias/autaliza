import { http } from '@/Services/http';
import { PersonData } from '@/interfaces/person-data';
import { useQuery } from '@tanstack/react-query';
import { AxiosPromise } from 'axios';

const getUser = async (): AxiosPromise<PersonData> => {
  const response = await http.get('/profile');
  return response;
};

export const useUserData = () => {
  const query = useQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
