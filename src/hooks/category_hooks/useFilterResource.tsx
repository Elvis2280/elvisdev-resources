import { resourceData } from '@/src/interfaces/resourceInterfaces';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function useFilterResource(listValues: resourceData) {
  const [selectedValue, setSelectedValue] = useState('');
  const [filteredResources, setFilteredResources] = useState<resourceData | []>(
    [],
  );

  useEffect(() => {
    if (selectedValue.length > 0) {
      filterList();
    }
  }, [selectedValue]);

  const filterList = () => {
    const listResources = listValues.filter((resource) => {
      if (resource.data.resource_title[0].text.includes(selectedValue)) {
        return resource;
      }
    });
  };

  return { setSelectedValue, filteredResources, selectedValue };
}
