import { TCity } from './city';
import { TLocation } from './location';

export type TOfferPreview = {
  city: TCity;
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: string;
  // onCardHover?: void;
  // block?: string;
 }

export type TOfferPreviews = TOfferPreview[];
