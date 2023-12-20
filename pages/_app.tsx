'use client';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import NavBar from '../features/navbar/components/NavBar/NavBar';
import '../styles/global.css';

type CustomAppProps = {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
};
const App = ({ Component, pageProps }: CustomAppProps) => {
  const MainContentWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <div>
        <NavBar />
        <main>{children}</main>
      </div>
    );
  };

  return (
    <MainContentWrapper>
      <Component {...pageProps} />
    </MainContentWrapper>
  );
};

export default App;
