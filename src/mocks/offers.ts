import { TOffer } from '../types/offer';
import { CityName } from '../const';

const AVATAR_URL = 'https://i.pravatar.cc/128';

function generateUniqueId() {
  return Date.now().toString() + Math.random().toString(36).substring(2, 15);
}

export const offers: TOffer[] = [
  {
    city: {
      'name': CityName.Dusseldorf,
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.85309666406198,
        'zoom': 13
      }
    },
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 142,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'id': generateUniqueId(),
  },
  {
    city: {
      'name': CityName.Amsterdam,
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 13
      }
    },
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 144,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'id': generateUniqueId(),
  },
  {
    city: {
      'name': CityName.Brussels,
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 13
      }
    },
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 257,
    'goods': [
      'Washing machine',
      'Laptop friendly workspace',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Fridge',
      'Breakfast',
      'Washer',
      'Dishwasher'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 16
    },
    'id': generateUniqueId(),
  },
  {
    city: {
      'name': CityName.Amsterdam,
      'location': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
        'zoom': 13
      }
    },
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2,
    'type': 'hotel',
    'bedrooms': 4,
    'maxAdults': 4,
    'price': 330,
    'goods': [
      'Breakfast',
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'id': generateUniqueId(),
  },
  {
    id: generateUniqueId(),
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 80,
    rating: 2.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    id: generateUniqueId(),
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 40,
    rating: 2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    id: generateUniqueId(),
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 80,
    rating: 4.5,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    id: generateUniqueId(),
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 100,
    rating: 3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    id: generateUniqueId(),
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Paris
    },
    description: 'I really wanted to see Paris, and when the opportunity arose to accompany my husband on a business trip to Paris, I was very happy about it. Trip for 4 days.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    rating: 2,
    title: 'Boutique Hotel "Vellion Baumansky"',
    type: 'apartment'
  },
  {
    id: generateUniqueId(),
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Hamburg
    },
    description: 'В Гамбург и вообще на Север Германии я хотел добраться очень давно, но постоянно возникали другие хотелки по поездкам. Но сейчас, когда уже истекала многолетняя немецкая виза, учитывая, что новую немецкую визу фактически не получить на данный момент, то Гамбург был наиболее очевидным выбором. ',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-small-04.jpg',
    price: 200,
    rating: 3,
    title: 'Hotel and apartments Stars of Arbat',
    type: 'room'
  },
  {
    id: generateUniqueId(),
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Dusseldorf
    },
    description: 'На последние выходные августам нам нужна была ночёвка в Дюссельдорфе, но мы тянули с бронированием отеля до последнего и поэтому в начале недели на букинге в интересующем нас районе всё было распродано или цены были, мягко говоря, высоковаты.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 150,
    rating: 2.5,
    title: 'Hilton Garden Inn Moscow Krasnoselskaya Hotel',
    type: 'apartment'
  },
  {
    id: generateUniqueId(),
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Dusseldorf
    },
    description: 'На последние выходные августам нам нужна была ночёвка в Дюссельдорфе, но мы тянули с бронированием отеля до последнего и поэтому в начале недели на букинге в интересующем нас районе всё было распродано или цены были, мягко говоря, высоковаты.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-small-03.jpg',
    price: 70,
    rating: 1,
    title: 'CONCERT at Elektrozavodskaya KONCERT.RU™ HOTEL',
    type: 'room'
  },
  {
    id: generateUniqueId(),
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: CityName.Amsterdam
    },
    description: 'На последние выходные августам нам нужна была ночёвка в Дюссельдорфе, но мы тянули с бронированием отеля до последнего и поэтому в начале недели на букинге в интересующем нас районе всё было распродано или цены были, мягко говоря, высоковаты.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.414638,
      longitude: 5.025148,
      zoom: 12
    },
    maxAdults: 4,
    previewImage: 'img/apartment-small-03.jpg',
    price: 70,
    rating: 1,
    title: 'CONCERT at Elektrozavodskaya KONCERT.RU™ HOTEL',
    type: 'room'
  }
];
