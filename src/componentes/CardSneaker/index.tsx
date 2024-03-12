import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SneakerType } from '../../types/SneakerType';

import './CardSneaker.css';

function CardSneaker(
  { sneakerItem, isActive }:
  { sneakerItem: SneakerType; isActive: boolean },
) {
  const {
    manufacturer,
    title,
    shortTitile,
    image,
    price,
    promotion,
  } = sneakerItem;

  const isPromotional = promotion?.isPromotional;
  const off = promotion?.off;

  const [promotionalPrice, setPromotionalPrice] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (isPromotional && off && !promotionalPrice) {
      const discountedPrice = price - (price * off) / 100;
      setPromotionalPrice(discountedPrice);
    }
  }, [isPromotional, off, price, promotionalPrice]);

  useEffect(() => {
    const img = new Image();
    img.src = image ?? '';
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [image]);

  return (
    <div className="card">
      { isPromotional && (
        <div className="label_promotional">
          { off }
          %
          <strong>off</strong>
        </div>
      )}

      <div className="sneaker_big_title_module">
        <h2 className="sneaker_short_title">{ shortTitile }</h2>
        <p className="sneaker_manufacturer">{ manufacturer }</p>
      </div>
      <figure className="sneaker_img_module">
        {imageLoaded && isActive && (
          <motion.img
            src={ image }
            alt=""
            initial={ { rotate: -10, scale: 0.7, x: 10, y: 40 } }
            animate={ { rotate: 0, scale: 1, x: 10, y: 40 } }
            whileHover={ { scale: 1.3 } }
            whileTap={ { scale: 0.9 } } // Adicionando a animação de "bounce" aqui
            transition={ { duration: 1.5, ease: 'easeInOut', delay: 0.1 } }
          />
        )}
      </figure>
      <div className="sneaker_info_module">
        <h1 className="sneaker_tile">{ title }</h1>
        <p className="sneaker_price">
          {isPromotional && promotionalPrice ? (
            <>
              {promotionalPrice.toFixed(2)}
              {' '}
              <span>{price}</span>
            </>
          ) : (
            `${price}`
          )}
        </p>
      </div>
    </div>
  );
}

export default CardSneaker;
