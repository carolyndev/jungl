import { TPlantsResponse, TPlantsRequestParams } from '../types';
import useApiClient from '@hooks/useApiClient';
import { useQuery } from '@tanstack/react-query';

const usePlants = (params: TPlantsRequestParams) => {
  const { apiClient } = useApiClient();

  const query = useQuery<TPlantsResponse>({
    queryKey: ['useApiClient', params],
    queryFn: async () => {
      const { data } = await apiClient.get('/plants', { params });
      return data;
    },
    enabled: params.search.length > 0,
    staleTime: 500,
  });

  return query;
};

export default usePlants;
