import { WeatherType } from '../types/WeatherType';

const weatherData: WeatherType[] = [
  {
    id: 1,
    weekday: 'Monday',
    date: {
      month: 'Jan',
      day: 20,
    },
    temp: {
      min: 18,
      max: 24,
    },
    humidity: {
      min: 20,
      max: 28,
    },
    weather: 'sunny',
    isSunny: true,
  },
  {
    id: 2,
    weekday: 'Tuesday',
    date: {
      month: 'Jan',
      day: 21,
    },
    temp: {
      min: 19,
      max: 25,
    },
    humidity: {
      min: 19,
      max: 25,
    },
    weather: 'cloudy',
    isSunny: false,
  },
  {
    id: 3,
    weekday: 'Wednesday',
    date: {
      month: 'Jan',
      day: 22,
    },
    temp: {
      min: 17,
      max: 23,
    },
    humidity: {
      min: 18,
      max: 26,
    },
    weather: 'rainy',
    isSunny: false,
  },
  {
    id: 4,
    weekday: 'Thursday',
    date: {
      month: 'Jan',
      day: 23,
    },
    temp: {
      min: 20,
      max: 26,
    },
    humidity: {
      min: 22,
      max: 30,
    },
    weather: 'thunder',
    isSunny: false,
  },
  {
    id: 5,
    weekday: 'Friday',
    date: {
      month: 'Jan',
      day: 24,
    },
    temp: {
      min: 22,
      max: 28,
    },
    humidity: {
      min: 24,
      max: 32,
    },
    weather: 'rainy',
    isSunny: false,
  },
  {
    id: 6,
    weekday: 'Saturday',
    date: {
      month: 'Jan',
      day: 25,
    },
    temp: {
      min: 21,
      max: 27,
    },
    humidity: {
      min: 20,
      max: 28,
    },
    weather: 'sunny',
    isSunny: true,
  },
  {
    id: 7,
    weekday: 'Sunday',
    date: {
      month: 'Jan',
      day: 25,
    },
    temp: {
      min: 21,
      max: 27,
    },
    humidity: {
      min: 20,
      max: 28,
    },
    weather: 'cloudy',
    isSunny: true,
  },
];

export default weatherData;
