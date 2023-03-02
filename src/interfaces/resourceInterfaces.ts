export type resourceData = [
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

export type resourceListCardInterface = {
  title: string;
  imageLink: string;
  description: string;
  link: string;
};

export type prismicDataSchema = {
  page: number;
  results_per_page: number;
  results_size: number;
  total_results_size: number;
  total_pages: number;
  next_page: string | null;
  prev_page: string | null;
  results: resourceData;
};
