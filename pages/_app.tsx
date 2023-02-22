import MainLayout from '@/src/layout/MainLayout';
import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import Link from 'next/link';

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
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
      </MainLayout>
    </ThemeProvider>
  );
}
