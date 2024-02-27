import { SneakerType } from '../../types/SneakerType';

import './CardSneaker.css';

function CardSneaker({ sneakerItem }: { sneakerItem: SneakerType }) {
  const {
    manufacturer,
    title,
    shortTitile,
    image,
    price,
  } = sneakerItem;

  return (
    <div className="card">
      <h1 className="sneaker_tile">{ title }</h1>
      <h2 className="sneaker_short_title">{ shortTitile }</h2>
      <p>{ manufacturer}</p>
      <figure>
        <img src={ image } alt="" />
      </figure>
      <p className="sneaker_price">{price}</p>
    </div>
  );
}

export default CardSneaker;
