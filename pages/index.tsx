import Head from 'next/head';

import { Box, Stack, Typography } from '@mui/material';
import useBuildCards from '@/src/hooks/home_hooks/useBuildCards';
import { createClient, predicate } from '@prismicio/client';
import sm from '../sm.json';
import { useEffect } from 'react';

export default function Home({ listResources }: { listResources: any }) {
  const { cardList, buildListCard } = useBuildCards();

  useEffect(() => {
    if (listResources) {
      buildListCard(listResources);
    }
  }, []);
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
          <Stack spacing={2}>{cardList.frontend}</Stack>
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
          <Stack spacing={2}>{cardList.backend}</Stack>
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
          <Stack spacing={2}>{cardList.design}</Stack>
        </Box>
      </Stack>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient(sm.apiEndpoint);
  const frontendResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'frontend')],
  });
  const backendResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'backend')],
  });
  const designResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'design')],
  });

  const listResources = {
    frontend: frontendResources.results.slice(0, 3),
    backend: backendResources.results.slice(0, 3),
    design: designResources.results.slice(0, 3),
  };
  return {
    props: {
      listResources,
    },
  };
}
