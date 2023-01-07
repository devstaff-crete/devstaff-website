import { StaticImageData } from 'next/image';

import panCreta from '../public/sponsors/pancreta.png';

type Sponsor = {
  title: string;
  image: StaticImageData;
  website: string;
  facebookUrl: string;
  linkedInUrl: string;
};

export const sponsors: Sponsor[] = [
  {
    title: 'Pancreta Cooperative Bank',
    image: panCreta,
    website: 'https://devstaff.gr',
    facebookUrl: 'https://devstaff.gr',
    linkedInUrl: 'https://devstaff.gr'
  }
];
