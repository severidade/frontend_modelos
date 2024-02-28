import Slider from 'react-slick';
import { SneakerType } from '../../types/SneakerType';
import CardSneaker from '../CardSneaker';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SneakerList.css';

function SneakerList({ sneakers }: { sneakers: SneakerType[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="container_card">
      <Slider { ...settings }>
        { sneakers.map((sneaker) => (
          <CardSneaker key={ sneaker.id } sneakerItem={ sneaker } />
        ))}
      </Slider>
    </section>
  );
}

export default SneakerList;
