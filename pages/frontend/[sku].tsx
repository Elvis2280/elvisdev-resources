import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

type Props = {};

export default function Index({}: Props) {
  return (
    <Box mt={4}>
      <Stack spacing={1}>
        <Typography
          color={'primary.light'}
          fontSize={26}
          fontWeight={'bold'}
          variant="h4"
        >
          Frontend Resources
        </Typography>

        <Link color={'primary'}>Resource Link</Link>
      </Stack>
    </Box>
  );
}
