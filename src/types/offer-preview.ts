import { TCity } from './city';
import { TLocation } from './location';

export type TOfferPreview = {
  city: TCity;
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
 }
