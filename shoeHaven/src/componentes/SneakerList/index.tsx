import { SneakerType } from '../../types/SneakerType';
import CardSneaker from '../CardSneaker';

function SneakerList({ sneakers }: { sneakers: SneakerType[] }) {
  return (
    <section className="container_card">
      { sneakers.map((sneaker) => (
        <CardSneaker key={ sneaker.id } sneakerItem={ sneaker } />
      ))}
    </section>
  );
}

export default SneakerList;
