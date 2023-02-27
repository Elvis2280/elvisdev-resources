import {
  prismicDataSchema,
  resourceData,
  resourceListCardInterface,
} from '@/src/interfaces/resourceInterfaces';
import React, { useEffect, useState } from 'react';

export default function useCategoryTransformData(
  categoryData: prismicDataSchema,
) {
  const [cardList, setCardList] = useState<any[]>([]);
  const [tags, setTags] = useState<[] | [resourceListCardInterface]>([]);
  const [optionsSearch, setOptionsSearch] = useState<
    [] | { label: string; title: string }[] | string[]
  >([]);
  const [searchSelected, setSearchSelected] = useState("")

  useEffect(() => {
    getAllTags(categoryData.results);
    cardDataGenerate(categoryData.results);
    getListResourceOptions(categoryData.results);
  }, []); // when call this custom hook set the list of resource by data passed

  useEffect(() => {

    if (searchSelected.length > 0) {
      filterResource()
    }
    else {
      cardDataGenerate(categoryData.results);
    }
  }, [searchSelected])


  const getAllTags = (listData: resourceData) => {
    const allTags = [
      ...new Set(
        listData.map((resource) => {
          return resource.tags[0];
        }),
      ),
    ];
    console.log(allTags);
  };

  const cardDataGenerate = (listData: resourceData) => {
    const resorces = listData.map((resource) => {
      return {
        title: resource.data.resource_title[0].text,
        imageLink: resource.data.resource_image.url,
        description: resource.data.resource_description[0].text,
      };
    });
    setCardList(resorces);
  };

  const getListResourceOptions = (listData: resourceData) => {
    const options = listData.map((resource) => {
      return resource.data.resource_title[0].text
     
    });
    setOptionsSearch(options);
  };


  const filterResource = () => {
      const listData  = categoryData.results.filter((resource) => {
            if (resource.data.resource_title[0].text.includes(searchSelected)) {
               return resource
           }
        })

    // @ts-ignore 
    cardDataGenerate(listData)
  
  }

  return { cardList, optionsSearch, setSearchSelected, searchSelected };
}
