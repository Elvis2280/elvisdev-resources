import CardResource from '@/src/components/CardResource';
import useCategoryTransformData from '@/src/hooks/category_hooks/useCategoryTransformData';
import {
  prismicDataSchema,
  resourceListCardInterface,
} from '@/src/interfaces/resourceInterfaces';
import {
  Autocomplete,
  Box,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { createClient, predicate } from '@prismicio/client';
import React from 'react';
import sm from '../../sm.json';

export default function Index({
  designResource,
}: {
  designResource: prismicDataSchema;
}) {
  const { cardList, optionsSearch, searchSelected, setSearchSelected } =
    useCategoryTransformData(designResource);
  return (
    <Box mt={4}>
      <Stack spacing={2} mb={4}>
        <Typography
          justifyContent={"center"}
          variant="h1"
          fontSize={26}
          fontWeight="bold"
          color={'primary.light'}
        >
          Design List Resources
        </Typography>
        <Stack  direction={'row'} alignItems="center">
          <Autocomplete
            fullWidth={true}
            //@ts-ignore
            value={searchSelected === '' ? null : searchSelected}
            isOptionEqualToValue={(option, value) =>
              option === value ? true : true
            }
            inputValue={searchSelected}
            onInputChange={(event, newInputValue) => {
              setSearchSelected(newInputValue);
            }}
            size="small"
            disablePortal
            id="combo-box-demo"
            //@ts-ignore
            options={optionsSearch}
            renderInput={(params) => (
              <TextField {...params} label="Search..." />
            )}
          />
         
        </Stack>
      </Stack>

      <Stack spacing={4}>
        {cardList.map((resource: resourceListCardInterface) => {
          return (
            <CardResource
              key={resource.title}
              title={resource.title}
              description={resource.description}
              imageLink={resource.imageLink}
              cardLink={`/design/${resource.link}`}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

export async function getStaticProps() {
  const client = createClient(sm.apiEndpoint);
  const designResource = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'design')],
    orderings: 'document.last_publication_date',
  });
  const tags = await client.getTags();

  return {
    props: {
      designResource,
    },
  };
}
