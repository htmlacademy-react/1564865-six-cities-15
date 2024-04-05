import { TCity } from './city';
import { TOfferPreview } from './offer-preview';
import { TUser } from './user';

export type TOffer = TOfferPreview & {
  bedrooms: number;
  description?: string;
  host: TUser;
  images?: string[];
  maxAdults: number;
  id?: string;
};

export type TOffers = {
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: TUser;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}
