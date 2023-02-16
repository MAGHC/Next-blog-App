import { useFetch } from './fetch';
import { JoinT } from '@/type/auth';

export function useAuth() {
  const { postData } = useFetch();

  const joinHandler = async (body: JoinT) => {
    const res = await postData('api/auth/join', body);

    return res;
  };

  return { joinHandler };
}
