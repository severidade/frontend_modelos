import Card from './Card';
import WeatherData from '../data/WeatherData.tsx';

function CardList() {
  return (
    <div className="card-list">
      { WeatherData.map(
        (card) => <Card key={ card.id } data={ card } />,
      )}
    </div>
  );
}

export default CardList;
