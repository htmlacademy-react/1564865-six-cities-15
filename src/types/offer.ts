import { TLocationType } from './location';
import { TUser } from './user';
import { City } from './city';

export type TOffer = {
  city: City;
  images: string[];
  title: string;
  isFavorite?: boolean;
  isPremium: boolean;
  location?: TLocationType;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  previewImage: string;
  price: number;
  goods: string[];
  host: TUser;
  description?: string;
  id: string;
};
