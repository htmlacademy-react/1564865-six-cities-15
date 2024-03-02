export const Setting = {
  ErrorsCount: 10
};

export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const PLACE_OPTIONS: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Root = '/',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
