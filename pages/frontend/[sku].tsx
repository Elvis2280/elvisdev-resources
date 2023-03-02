import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { createClient, predicate } from '@prismicio/client';
import Image from 'next/image';
import React from 'react';
import sm from '../../sm.json';

type Props = {
  resourceData: {
    title: string;
    description: string;
    link: string;
    imageLink: string;
  };
};

export default function Index({ resourceData }: Props) {
  return (
    <Box mt={4}>
      <Stack spacing={1}>
        <Typography
          color={'primary.light'}
          fontSize={26}
          fontWeight={'bold'}
          variant="h4"
        >
          {resourceData.title}
        </Typography>

        <Link href={resourceData.link} target="_blank" color={'primary'}>
          Resource Link
        </Link>
      </Stack>

      <Box mt={2} width={'100%'} height={200} position={'relative'}>
        <Image
          src={resourceData.imageLink ? resourceData.imageLink : '/rocket.png'}
          alt={resourceData.title}
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Box mt={2}>
        <Typography color={'primary.light'}>
          {resourceData.description}
        </Typography>
      </Box>
    </Box>
  );
}

export async function getStaticPaths() {
  // Create a client instance using the API endpoint
  const client = createClient(sm.apiEndpoint);
  // Fetch all the resource posts of type 'frontend' and order them by last publication date
  const frontendResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'frontend')],
    orderings: 'document.last_publication_date',
  });
  // Map each resource post to a path object with its slug as the parameter
  const paths = frontendResources.results.map((resource) => {
    return { params: { sku: resource.slugs[0] } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  // Create a client instance using the API endpoint
  const client = createClient(sm.apiEndpoint);
  // Fetch all the resource posts of type 'frontend' and order them by last publication date
  const frontendResource = await client.getByUID('resource-post', params.sku, {
    predicates: [predicate.at('my.resource-post.type_resource', 'frontend')],
    orderings: 'document.last_publication_date',
  });
  const resourceData = {
    title: frontendResource.data.resource_title[0].text,
    description: frontendResource.data.resource_description[0].text,
    imageLink: frontendResource.data.resource_image.url,
    link: frontendResource.data.link.url,
  };

  return { props: { resourceData } };
}
