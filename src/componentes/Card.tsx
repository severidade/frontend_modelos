import { WeatherType } from '../types/WeatherType';

function Card({ data }: { data: WeatherType }) {
  const weatherIconClassName = `icon ${data.weather} `;

  const cardClassName = `card ${data.isSunny ? 'is_sunny' : ''} ${data.weekday === 'Saturday' || data.weekday === 'Sunday' ? 'is_weekend' : ''}`.trim();

  return (
    <div className={ cardClassName }>
      <div className="heder_card">
        <div className={ weatherIconClassName }>
          icon
          {' '}
          { data.weather }
        </div>
        <div className="card_title">
          { data.weekday }
          <p className="card_subtitle">
            { data.date.month }
            {' '}
            { data.date.day }
            <strong>
              { data.weather }
            </strong>
          </p>
        </div>
      </div>
      <div className="container_temperature">
        <h2 className="data-title">Temperature</h2>
        <p className="data_max">{data.temp.max}</p>
        <p className="data_min">{data.temp.min}</p>
      </div>
      <div className="container_humidity">
        <h2 className="data-title">Humidity</h2>
        <p className="data_max">{data.temp.max}</p>
        <p className="data_min">{data.temp.min}</p>
      </div>

    </div>
  );
}

export default Card;
