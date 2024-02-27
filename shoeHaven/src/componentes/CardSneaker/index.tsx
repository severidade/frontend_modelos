import { SneakerType } from '../../types/SneakerType';

import styles from './CardSneaker.module.css';

function CardSneaker({ sneakerItem }: { sneakerItem: SneakerType }) {
  const {
    manufacturer,
    title,
    shortTitile,
    image,
    price,
  } = sneakerItem;

  return (
    <div className={ styles.card }>
      <h1 className={ styles.sneaker_tile }>{ title }</h1>
      <h2 className={ styles.sneaker_short_title }>{ shortTitile }</h2>
      <p>{ manufacturer}</p>
      <figure>
        <img src={ image } alt="" />
      </figure>
      <p className={ styles.sneaker_price }>{price}</p>
    </div>
  );
}

export default CardSneaker;
