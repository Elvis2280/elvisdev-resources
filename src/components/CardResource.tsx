import { Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  imageLink: string;
  title: string;
  description: string;
};

export default function CardResource({ imageLink, title, description }: Props) {
  return (
    <Card className=" !bg-mainBlackLight border-none shadow flex-shrink-0 w-full">
      <picture className="h-40 w-full relative">
        <Image
          src={`${imageLink ? imageLink : '/rocket.png'}`}
          fill
          className=" object-contain"
          alt="no picture"
        />
      </picture>
      <h4 className=" text-main-400 text-xl">{title}</h4>
      <p className=" text-main-50">{description}</p>
    </Card>
  );
}
