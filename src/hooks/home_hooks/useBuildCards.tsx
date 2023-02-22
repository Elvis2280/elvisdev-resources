import CardResource from '@/src/components/CardResource';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type resourceData = [
  {
    id: string;
    uid: null | string;
    url: string | null;
    type: string;
    href: string;
    tags: [string];
    first_publication_date: string;
    last_publication_date: string;
    slugs: [string];
    lang: string;
    data: {
      link: { url: string };
      resource_description: [{ text: string }];
      resource_image: { alt: string; url: string };
      resource_title: [{ text: string }];
    };
  },
];

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

const exampleData = [1, 2, 3];

export default function useBuildCards() {
  const [cardList, setCardList] = useState<stateListResource>({
    frontend: [],
    backend: [],
    design: [],
  });

  // useEffect(() => {
  //   buildListCard();
  // }, []);

  const buildListCard = async (resources: resourceList) => {
    console.log(resources);
    const frontendCards = resources.frontend.map((resource) => {
      return (
        <CardResource
          key={resource.id}
          title={resource.data.resource_title[0].text}
          imageLink={resource.data.resource_image.url}
          description={resource.data.resource_description[0].text}
        />
      );
    });
    const backendCards = resources.backend.map((resource) => {
      return (
        <CardResource
          key={resource.id}
          title={resource.data.resource_title[0].text}
          imageLink={resource.data.resource_image.url}
          description={resource.data.resource_description[0].text}
        />
      );
    });
    const designCards = resources.design.map((resource) => {
      return (
        <CardResource
          key={resource.id}
          title={resource.data.resource_title[0].text}
          imageLink={resource.data.resource_image.url}
          description={resource.data.resource_description[0].text}
        />
      );
    });

    setCardList({
      frontend: frontendCards,
      backend: backendCards,
      design: designCards,
    });
  };
  return { cardList, buildListCard };
}
