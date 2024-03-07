import Slider from 'react-slick';
import { useState } from 'react';
import { SneakerType } from '../../types/SneakerType';
import CardSneaker from '../CardSneaker';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SneakerList.css';

function SneakerList({ sneakers }: { sneakers: SneakerType[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (currentSlide: number) => {
      setActiveSlide(currentSlide);
    },
  };

  return (
    <section className="container_card">
      <Slider { ...settings }>
        {sneakers.map((sneaker, index) => (
          <CardSneaker
            key={ sneaker.id }
            sneakerItem={ sneaker }
            isActive={ index === activeSlide }
          />
        ))}
      </Slider>
    </section>
  );
}

export default SneakerList;
