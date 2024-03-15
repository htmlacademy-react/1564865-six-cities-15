import { TOffer } from '../types/offer';
import { CityName } from '../const';
// import { TOfferPreview } from '../types/offer-preview';

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
];
