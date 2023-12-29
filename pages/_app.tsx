'use client';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import NavBar from '../features/navbar/components/NavBar/NavBar';
import '../styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type CustomAppProps = {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
};
const App = ({ Component, pageProps }: CustomAppProps) => {
  const queryClient = new QueryClient();

  const MainContentWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <div>
        <NavBar />
        <main>{children}</main>
      </div>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MainContentWrapper>
        <Component {...pageProps} />
      </MainContentWrapper>
    </QueryClientProvider>
  );
};

export default App;
