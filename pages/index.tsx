import Head from 'next/head';

import { Box, Stack, Typography } from '@mui/material';
import useBuildCards from '@/src/hooks/home_hooks/useBuildCards';
import { createClient, predicate } from '@prismicio/client';
import sm from '../sm.json';
import { resourceListCardInterface } from '@/src/interfaces/resourceInterfaces';
import CardResource from '@/src/components/CardResource';

export default function Home({ listResources }: { listResources: any }) {
  const { cardList } = useBuildCards(listResources);

  return (
    <>
      <Head>
        <title>ElvisDev Resources</title>
        <meta
          name="My list of resources for programming"
          content="My selection of useful software tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Stack my={4} spacing={4}>
        <Box>
          <Typography
            color={'primary.light'}
            fontSize={26}
            variant="h2"
            fontWeight="bold"
            marginBottom={2}
          >
            Last Frontend Resources
          </Typography>
          {/* Frontend list card */}
          <Stack spacing={2}>
            {cardList.frontend.map((resource: resourceListCardInterface) => {
              return (
                <CardResource
                  key={resource.title}
                  title={resource.title}
                  imageLink={resource.imageLink}
                  description={resource.description}
                  cardLink={resource.link}
                />
              );
            })}
          </Stack>
        </Box>
        <Box>
          <Typography
            marginBottom={2}
            color={'primary.light'}
            fontSize={26}
            variant="h2"
            fontWeight="bold"
          >
            Last Backend Resources
          </Typography>
          <Stack spacing={2}>
            {cardList.backend.map((resource: resourceListCardInterface) => {
              return (
                <CardResource
                  key={resource.title}
                  title={resource.title}
                  imageLink={resource.imageLink}
                  description={resource.description}
                  cardLink={resource.link}
                />
              );
            })}
          </Stack>
        </Box>
        <Box>
          <Typography
            marginBottom={2}
            color={'primary.light'}
            fontSize={26}
            variant="h2"
            fontWeight="bold"
          >
            Last Design Resources
          </Typography>
          <Stack spacing={2}>
            {cardList.design.map((resource: resourceListCardInterface) => {
              return (
                <CardResource
                  key={resource.title}
                  title={resource.title}
                  imageLink={resource.imageLink}
                  description={resource.description}
                  cardLink={resource.link}
                />
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient(sm.apiEndpoint);
  const frontendResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'frontend')],
    orderings: 'document.last_publication_date',
  });
  const backendResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'backend')],
    orderings: 'document.last_publication_date',
  });
  const designResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'design')],
    orderings: 'document.last_publication_date',
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
