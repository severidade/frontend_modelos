import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import WeatherData from '../data/WeatherData';

function CardList() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true, se eu quiser deixar um pedaço das cartas antes e depois aparecendo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="card-list">
      <Slider { ...settings }>
        {WeatherData.map((card) => (
          <div key={ card.id } className="slider-item">
            <Card data={ card } />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardList;
