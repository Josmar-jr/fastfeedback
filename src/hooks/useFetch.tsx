import useSWR from 'swr';
import api from 'services/api';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async (url: any) => {
    const res = await api.get(url);

    return res.data;
  });

  return { data, error, mutate };
}
