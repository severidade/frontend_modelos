import { WeatherType } from '../types/WeatherType';

function Card({ data }: { data: WeatherType }) {
  const weatherIcon = `icon ${data.weather} `;

  return (
    <div className="card">
      <div className={ weatherIcon }>
        icon
        {' '}
        { data.weather }
      </div>
      <h1>
        { data.weekday }
        <strong>
          {' '}
          { data.weather }
        </strong>
      </h1>
      <p>
        { data.date.month }
        {' '}
        { data.date.day }
      </p>
      <div className="container_temperature">
        <h2>Temperature</h2>
        <p>{data.temp.max}</p>
        <p>{data.temp.min}</p>
      </div>
      <div className="container_humidity">
        <h2>Humidity</h2>
        <p>{data.temp.max}</p>
        <p>{data.temp.min}</p>
      </div>

    </div>
  );
}

export default Card;
