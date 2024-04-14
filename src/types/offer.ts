import { TOfferPreview } from './offer-preview';
import { TUser } from './user';

export type TOffer = TOfferPreview & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};
