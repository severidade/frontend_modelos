type CardProps = {
  data: {
    id: number;
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
};

function Card({ data }: CardProps) {
  return (
    <div className="card">
      <h1>
        {data.weather}
        { data.weekday }
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
