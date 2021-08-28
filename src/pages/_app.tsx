import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import { Global } from '@emotion/react';
import { global } from 'styles/global';

import { AuthContextProvider } from 'contexts/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
      <Global styles={global} />
    </ChakraProvider>
  );
}
export default MyApp;
