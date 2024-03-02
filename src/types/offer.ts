import { LocationType } from './location';
import { User } from './user';
import { City } from './city';

export type Offer = {
  city: City;
  images: string[];
  title: string;
  isFavorite?: boolean;
  isPremium: boolean;
  location?: LocationType;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  previewImage: string;
  price: number;
  goods: string[];
  host: User;
  description?: string;
  id: number;
};
