import { API } from '@/lib/HTTP/API';

export const useFetch = <T, V>() => {
  const getDate = async (url: string): Promise<T> => {
    const res = await API.get(url);

    return res.data;
  };

  const postData = async (url: string, body: V): Promise<T> => {
    const res = await API.post(url, {
      ...body,
    });

    return res.data;
  };

  const putData = async (url: string, body: V): Promise<T> => {
    const res = await API.put(url, {
      ...body,
    });
    return res.data;
  };

  const deleteData = async (url: string): Promise<T> => {
    const res = await API.delete(url);
    return res.data;
  };

  return { getDate, postData, putData, deleteData };
};
