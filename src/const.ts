import { TCity } from './types/city';
import { TUserData } from './types/state';

export const REVIEW_DATE_FORMAT = 'MMMM YYYY';

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Root = '/',
  Offer = '/offer',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const CityMapDefault: TCity = {
  name: CityName.Paris,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

export const SortMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HightToLow: 'Price: high to low',
  TopRated: 'Top rated first'
} as const;

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

export const MAX_AROUND_OFFERS_COUNT = 3;
export const MAX_REVIEWS_COUNT = 10;
export const RATING_MAX = 5;
export const MAX_OFFER_IMAGE_COUNT = 6;

export const URL_MARKER_DEFAULT = 'markup/img/pin.svg';
export const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';

export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const CitiesMap: TCity[] = [
  {
    name: CityName.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13
    }
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export const defaultUser: TUserData = {
  name: '',
  avatarUrl: '',
  isPro: false,
  email: '',
  token: ''
};
