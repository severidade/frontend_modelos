import { SnekerType } from '../../types/SneakerType';

function SneakerList({ sneakers }: { sneakers: SnekerType[] }) {
  return (
    <section>
      {/* <p> Aqui lista todos os cards </p> */}

      <div>
        <h2 className="sneaker_price">
          {sneakers[5].title }
        </h2>
        <figure>
          <img src={ sneakers[5].image } alt={ sneakers[5].title } />
        </figure>
        <p className="sneaker_price">
          {sneakers[5].price }
        </p>
      </div>
    </section>
  );
}

export default SneakerList;
