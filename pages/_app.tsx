import { useState, useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ToastContextProvider from '@contexts/toastContext';
import ModalContextProvider from '@contexts/modalContext';
import { ToastContainer } from '@portals/ToastContainer';
import { ModalContainer } from '@portals/Modal';

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => setIsSSR(false), []);
  return (
    <ToastContextProvider>
      <ModalContextProvider>
        <style global jsx>{`#__next {height: 100%;}`}</style>
        {!isSSR && (
          <>
            <Component {...pageProps} />
            <ToastContainer />
            <ModalContainer />
          </>
        )}
      </ModalContextProvider>
    </ToastContextProvider>
  );
}

export default MyApp;