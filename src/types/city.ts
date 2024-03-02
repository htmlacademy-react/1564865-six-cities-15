import { CityName } from '../const';
import { TLocationType } from './location';

export type City = {
  location?: TLocationType;
  name: CityName;
}
