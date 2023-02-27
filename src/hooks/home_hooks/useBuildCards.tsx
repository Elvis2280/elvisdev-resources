import CardResource from '@/src/components/CardResource';
import { resourceData } from '@/src/interfaces/resourceInterfaces';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type resourceList = {
  frontend: resourceData;
  backend: resourceData;
  design: resourceData;
};

interface stateListResource {
  frontend: any[];
  backend: any[];
  design: any[];
}

export default function useBuildCards(resourceData: resourceList) {
  const [cardList, setCardList] = useState<stateListResource>({
    frontend: [],
    backend: [],
    design: [],
  });

  useEffect(() => {
    buildListCard(resourceData);
  }, [resourceData]);

  const buildListCard = async (resources: resourceList) => {
    const frontendCards = resources.frontend.map((resource) => {
      return {
        title: resource.data.resource_title[0].text,
        imageLink: resource.data.resource_image.url,
        description: resource.data.resource_description[0].text,
      };
    });
    const backendCards = resources.backend.map((resource) => {
      return {
        title: resource.data.resource_title[0].text,
        imageLink: resource.data.resource_image.url,
        description: resource.data.resource_description[0].text,
      };
    });
    const designCards = resources.design.map((resource) => {
      return {
        title: resource.data.resource_title[0].text,
        imageLink: resource.data.resource_image.url,
        description: resource.data.resource_description[0].text,
      };
    });

    setCardList({
      frontend: frontendCards,
      backend: backendCards,
      design: designCards,
    });
  };
  return { cardList };
}
