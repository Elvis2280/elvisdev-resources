import Head from 'next/head';
import { Inter } from '@next/font/google';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import useBuildCards from '@/src/hooks/home_hooks/useBuildCards';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { cardList } = useBuildCards();
  return (
    <>
      <Head>
        <title>ElvisDev Resources</title>
        <meta
          name="description"
          content="My selection of useful software tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack my={4} spacing={4}>
        <Box>
          <Typography
            color={'primary.light'}
            fontSize={24}
            fontWeight="bold"
            marginBottom={2}
          >
            Last
            <Typography
              marginX={1}
              fontSize={24}
              fontWeight="bold"
              component={'span'}
              color={'primary'}
            >
              Frontend
            </Typography>
            Resources
          </Typography>
          {/* Frontend list card */}
          <Stack spacing={2}>{cardList}</Stack>
        </Box>
        <Box>
          <Typography
            marginBottom={2}
            color={'primary.light'}
            fontSize={24}
            fontWeight="bold"
          >
            Last
            <Typography
              marginX={1}
              fontSize={24}
              fontWeight="bold"
              component={'span'}
              color={'primary'}
            >
              Backend
            </Typography>
            Resources
          </Typography>
          <Stack spacing={2}>{cardList}</Stack>
        </Box>
        <Box>
          <Typography
            marginBottom={2}
            color={'primary.light'}
            fontSize={24}
            fontWeight="bold"
          >
            Last
            <Typography
              marginX={1}
              fontSize={24}
              fontWeight="bold"
              component={'span'}
              color={'primary'}
            >
              Design
            </Typography>
            Resources
          </Typography>
          <Stack spacing={2}>{cardList}</Stack>
        </Box>
      </Stack>
    </>
  );
}
