import { SneakerType } from '../../types/SneakerType';
import CardSneaker from '../CardSneaker';

import styles from './SneakerList.module.css';

function SneakerList({ sneakers }: { sneakers: SneakerType[] }) {
  return (
    <section className={ styles.container_card }>
      { sneakers.map((sneaker) => (
        <CardSneaker key={ sneaker.id } sneakerItem={ sneaker } />
      ))}
    </section>
  );
}

export default SneakerList;
