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

      {/* { isPromotional && isActive && (
        <motion.div
          className="label_promotional"
          initial={ { scale: 0.7, rotate: 15 } }
          animate={ { scale: [1, 1.1, 1] } }
          transition={ { duration: 2, repeat: Infinity } }
        >
          { off }
          %
          <strong>off</strong>
        </motion.div>
      )} */}

      <div className="sneaker_big_title_module">
        <h2 className="sneaker_short_title">{ shortTitile }</h2>
        <p className="sneaker_manufacturer">{ manufacturer }</p>
      </div>
      {isActive && (
        <motion.figure
          className="sneaker_img_module"
          initial={ { rotate: -10, scale: 0.7, x: 10, y: 40 } }
          animate={ { rotate: 0, scale: 1, x: 10, y: 40 } }
          transition={ { duration: 1, ease: 'easeInOut' } }
          whileHover={ { scale: 1.3 } }
        >
          <motion.img
            src={ image }
            alt=""
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 0.0, duration: 0.3 } }
          />
        </motion.figure>
      )}
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
