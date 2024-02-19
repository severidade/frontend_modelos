import { WeatherType } from '../types/WeatherType';

function Card({ data }: { data: WeatherType }) {
  const weatherIconClassName = `icon ${data.weather} `;

  return (
    <div className="card">
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
