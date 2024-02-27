import { SneakerType } from '../../types/SneakerType';

function CardSneaker({ sneakerItem }: { sneakerItem: SneakerType }) {
  const {
    manufacturer,
    title,
    image,
    price,
  } = sneakerItem;

  return (
    <div className="card">
      <h2 className="sneaker_tile">{ title }</h2>
      <p>{ manufacturer}</p>
      <figure>
        <img src={ image } alt="" />
      </figure>
      <p className="sneaker_price">{price}</p>
    </div>
  );
}

export default CardSneaker;
