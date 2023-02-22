import MainLayout from '@/src/layout/MainLayout';
import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1BE6CE',
        light: '#EFFEFB',
        dark: '#048179',
      },
      //@ts-ignore
      bgcontrast: {
        main: '#293635',
      },
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
