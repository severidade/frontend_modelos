import Card from './Card';
import WeatherData from '../data/WeatherData.tsx';

function CardList() {
  return (
    <div className="card-list">
      <Card data={ WeatherData[0] } />
      <Card data={ WeatherData[1] } />
      <Card data={ WeatherData[2] } />
      <Card data={ WeatherData[3] } />
    </div>
  );
}

export default CardList;
