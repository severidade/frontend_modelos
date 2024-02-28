import { SneakerType } from '../types/SneakerType';

import tenis01 from '../assets/sneakers/01.png';
import tenis02 from '../assets/sneakers/02.png';
import tenis03 from '../assets/sneakers/03.png';
import tenis04 from '../assets/sneakers/04.png';
import tenis05 from '../assets/sneakers/05.png';
import tenis06 from '../assets/sneakers/06.png';

const SneakerList: SneakerType[] = [
  {
    id: 1,
    manufacturer: 'Nike',
    title: 'Tênis Nike Dunk Low Masculino',
    shortTitile: 'DUNK LOW',
    image: tenis01,
    price: 849.99,
  },
  {
    id: 2,
    manufacturer: 'Nike',
    title: 'Tênis Adidas Samba OG',
    shortTitile: 'SAMBA',
    image: tenis02,
    price: 699.99,
  },
  {
    id: 3,
    manufacturer: 'Vans',
    title: 'Tênis Vans Ultrarange',
    shortTitile: 'ULTRARANGE',
    image: tenis03,
    price: 359.99,
  },
  {
    id: 4,
    manufacturer: 'Nike',
    title: "Tênis Nike Air Force 1'07 NCPS Masculino",
    shortTitile: 'AIR FORCE',
    image: tenis04,
    price: 799.99,
  },
  {
    id: 5,
    manufacturer: 'adidas',
    title: 'Tênis Adidas samba Og Unissex',
    shortTitile: 'SAMBA',
    image: tenis05,
    price: 699.99,
  },
  {
    id: 6,
    manufacturer: 'Nike',
    title: 'Tênis Nike Dunk Hi Retrô Masculino',
    shortTitile: 'DUNK HI',
    image: tenis06,
    price: 749.99,
  },
];

export default SneakerList;
