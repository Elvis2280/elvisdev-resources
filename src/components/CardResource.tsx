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
    <Card className="bg-lightdark" sx={{ paddingBottom: '10px' }}>
      <Box
        display={'block'}
        height={175}
        component={'picture'}
        position="relative"
      >
        <Image
          src={imageLink ? imageLink : '/rocket.png'}
          alt="React Logo"
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <CardContent>
        <Typography fontSize={22} color="primary" component={'h3'}>
          {title}
        </Typography>
        <Typography
          paragraph
          component={'p'}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
