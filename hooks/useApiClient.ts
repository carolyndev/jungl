import Axios, { AxiosResponse, RawAxiosRequestConfig } from 'axios';
import { useMemo } from 'react';
import { API_URL } from '@constants/api';

export type TApiClient = {
  get: (
    route: string,
    config?: RawAxiosRequestConfig
  ) => Promise<AxiosResponse>;
  post: (
    route: string,
    data?: Record<string, unknown> | FormData,
    config?: RawAxiosRequestConfig
  ) => Promise<AxiosResponse>;
  put: (
    route: string,
    data?: Record<string, unknown> | FormData,
    config?: RawAxiosRequestConfig
  ) => Promise<AxiosResponse>;
  patch: (
    route: string,
    data?: Record<string, unknown> | FormData,
    config?: RawAxiosRequestConfig
  ) => Promise<AxiosResponse>;
  delete: (
    route: string,
    config?: RawAxiosRequestConfig
  ) => Promise<AxiosResponse>;
};

export type UseApiClientResponse = {
  apiClient: TApiClient;
};

const useApiClient = (baseURL?: string): UseApiClientResponse => {
  const axios = useMemo(() => {
    return Axios.create({
      baseURL: baseURL || API_URL,
    });
  }, []);

  const apiClient = {
    get: (route: string, config?: RawAxiosRequestConfig) =>
      axios.get(route, {
        baseURL: baseURL || API_URL,
        ...config,
      }),
    post: (
      route: string,
      data?: Record<string, unknown> | FormData,
      config?: RawAxiosRequestConfig
    ) =>
      axios.post(route, data, {
        baseURL: baseURL || API_URL,
        ...config,
      }),
    put: (
      route: string,
      data?: Record<string, unknown> | FormData,
      config?: RawAxiosRequestConfig
    ) =>
      axios.put(route, data, {
        baseURL: baseURL || API_URL,
        ...config,
      }),
    patch: (
      route: string,
      data?: Record<string, unknown> | FormData,
      config?: RawAxiosRequestConfig
    ) =>
      axios.patch(route, data, {
        baseURL: baseURL || API_URL,
        ...config,
      }),
    delete: (route: string, config?: RawAxiosRequestConfig) =>
      axios.delete(route, {
        baseURL: baseURL || API_URL,
        ...config,
      }),
  };

  return { apiClient };
};

export default useApiClient;
