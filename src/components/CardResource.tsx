import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Props = {
  imageLink: string;
  title: string;
  description: string;
};

export default function CardResource({ imageLink, title, description }: Props) {
  return (
    <Card sx={{ paddingY: '10px' }}>
      <Box
        display={'block'}
        height={120}
        component={'picture'}
        position="relative"
      >
        <Image
          src={imageLink ? imageLink : '/rocket.png'}
          alt="React Logo"
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <CardContent>
        <Typography fontSize={22} color="primary" component={'h3'}>
          {title}
        </Typography>
        <Typography component={'p'}>{description}</Typography>
      </CardContent>
    </Card>
  );
}
