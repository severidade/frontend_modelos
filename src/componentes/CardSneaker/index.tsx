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

  useEffect(() => {
    if (isPromotional && off && !promotionalPrice) {
      const discountedPrice = price - (price * off) / 100;
      setPromotionalPrice(discountedPrice);
    }
  }, [isPromotional, off, price, promotionalPrice]);

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
      <figure
        className="sneaker_img_module"
      >
        {isActive && (
          <motion.img
            src={ image }
            alt=""
            initial={ { opacity: 0, rotate: -10, scale: 0.7, x: 10, y: 40 } }
            animate={ { opacity: 1, rotate: 0, scale: 1, x: 10, y: 40 } }
            whileHover={ { scale: 1.3 } }
            transition={ { duration: 0.3, ease: 'easeInOut' } }
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
