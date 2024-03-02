import { CityName } from '../const';
import { LocationType } from './location';

export type City = {
  location?: LocationType;
  name: CityName;
}
