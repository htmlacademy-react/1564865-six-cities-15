import { TOfferPreview } from './offer-preview';
import { TUser } from './user';

export type TOffer = TOfferPreview & {
  bedrooms: number;
  description?: string;
  host: TUser;
  images: string[];
  maxAdults: number;
  id?: string;
};

export type TOffers = TOffer[];
