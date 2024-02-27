import { SnekerType } from '../types/SneakerType';

import tenis01 from '../assets/sneakers/01.png';
import tenis02 from '../assets/sneakers/02.png';
import tenis03 from '../assets/sneakers/03.png';
import tenis04 from '../assets/sneakers/04.png';
import tenis05 from '../assets/sneakers/05.png';
import tenis06 from '../assets/sneakers/06.png';

const SnekerList: SnekerType[] = [
  {
    id: 1,
    manufacturer: 'Nike',
    title: 'TÊNIS NIKE DUNK LOW MASCULINO',
    image: tenis01,
    price: 849.99,
  },
  {
    id: 2,
    manufacturer: 'Nike',
    title: 'TÊNIS ADIDAS SAMBA OG',
    image: tenis02,
    price: 699.99,
  },
  {
    id: 3,
    manufacturer: 'Vans',
    title: 'TÊNIS VANS ULTRARANGE',
    image: tenis03,
    price: 359.99,
  },
  {
    id: 4,
    manufacturer: 'Nike',
    title: "TÊNIS NIKE AIR FORCE 1'07 NCPS MASCULINO",
    image: tenis04,
    price: 799.99,
  },
  {
    id: 5,
    manufacturer: 'Nike',
    title: 'TÊNIS ADIDAS SAMBA OG UNISSEX',
    image: tenis05,
    price: 699.99,
  },
  {
    id: 6,
    manufacturer: 'Nike',
    title: 'TÊNIS NIKE DUNK HI RETRÔ SE MASCULINO',
    image: tenis06,
    price: 749.99,
  },
];

export default SnekerList;
