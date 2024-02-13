export type WeatherType = {

  id?: number;
  weekday: string;
  date: {
    month: string;
    day: number;
  };
  temp: {
    min: number;
    max: number;
  };
  humidity: {
    min: number;
    max: number;
  };
  weather: string;
  isSunny: boolean;

};
