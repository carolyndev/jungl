import { TItemsResponse, TItemsRequestParams } from '../types';
import useApiClient from '@hooks/useApiClient';
import { useQuery } from '@tanstack/react-query';

const useItems = (params: TItemsRequestParams) => {
  const { apiClient } = useApiClient();

  const query = useQuery<TItemsResponse>({
    queryKey: ['useApiClient', params],
    queryFn: async () => {
      const { data } = await apiClient.get('/plants', { params });
      return data;
    },
  });

  return query;
};

export default useItems;
