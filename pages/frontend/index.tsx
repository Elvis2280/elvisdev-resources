import CardResource from '@/src/components/CardResource';
import useCategoryTransformData from '@/src/hooks/category_hooks/useCategoryTransformData';
import {
  prismicDataSchema,
  resourceListCardInterface,
} from '@/src/interfaces/resourceInterfaces';
import {
  Autocomplete,
  Box,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { createClient, predicate } from '@prismicio/client';
import React from 'react';
import sm from '../../sm.json';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export default function Index({
  frontendResources,
}: {
  frontendResources: prismicDataSchema;
}) {
  const { cardList, optionsSearch, searchSelected, setSearchSelected } =
    useCategoryTransformData(frontendResources);
  return (
    <Box mt={4}>
      <Stack spacing={2} mb={4}>
        <Typography
          variant="h1"
          fontSize={26}
          fontWeight="bold"
          color={'primary.light'}
        >
          Fronted List Resources
        </Typography>
        <Stack direction={'row'} alignItems="center">
          <Autocomplete
            value={searchSelected === "" ? null : searchSelected}
            isOptionEqualToValue={(option, value) => option === value ? true : true} 
            inputValue={searchSelected}
            onInputChange={(event, newInputValue) => {
          setSearchSelected(newInputValue);
        }}
            size="small"
            disablePortal
            id="combo-box-demo"
            options={optionsSearch}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search..." />
            )}
          />
          <Box>
            <Tooltip title="filter">
              <IconButton color="primary">
                <FilterAltOutlinedIcon fontSize={'large'} />
              </IconButton>
            </Tooltip>
          </Box>
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
            />
          );
        })}
      </Stack>
    </Box>
  );
}

export async function getStaticProps() {
  const client = createClient(sm.apiEndpoint);
  const frontendResources = await client.getByType('resource-post', {
    predicates: [predicate.at('my.resource-post.type_resource', 'frontend')],
    orderings: 'document.last_publication_date',
  });
  const tags = await client.getTags();
  console.log(frontendResources);

  return {
    props: {
      frontendResources,
    },
  };
}
