import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const exampleData = [1, 2, 3];

export default function useBuildCards() {
  const [cardList, setCardList] = useState<null | JSX.Element[] | []>(null);

  useEffect(() => {
    buildListCard();
  }, []);

  const buildListCard = async () => {
    const listCard = exampleData.map((card) => {
      return (
        <Card key={card} sx={{ paddingY: '10px' }}>
          <Box
            display={'block'}
            height={120}
            component={'picture'}
            position="relative"
          >
            <Image
              src={'/rocket.png'}
              alt="React Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <CardContent>
            <Typography fontSize={22} color="primary" component={'h3'}>
              React
            </Typography>
            <Typography component={'p'}>
              Help to build website fast and easy to maintain
            </Typography>
          </CardContent>
        </Card>
      );
    });

    setCardList(listCard);
  };
  return { cardList };
}
