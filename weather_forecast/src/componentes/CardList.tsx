import Card from './Card';
import WeatherData from '../data/WeatherData.tsx';

function CardList() {
  return (
    <div className="card-list">
      <Card data={ WeatherData[0] } />
    </div>
  );
}

export default CardList;
