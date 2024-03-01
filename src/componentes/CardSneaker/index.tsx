import { useState, useEffect } from 'react';
import { SneakerType } from '../../types/SneakerType';

import './CardSneaker.css';

function CardSneaker({ sneakerItem }: { sneakerItem: SneakerType }) {
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
      <figure className="sneaker_img_module">
        <img src={ image } alt="" />
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
