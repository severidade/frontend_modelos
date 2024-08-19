/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/index.tsx';
import Player from './components/Player/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

function App() {
  const [favoritList, setFavoritList] = useState<string[]>([]);

  const toggleFavorite = (movieTitle: string) => {
    setFavoritList((prevFavoritList) => {
      if (prevFavoritList.includes(movieTitle)) {
        return prevFavoritList.filter((fav) => fav !== movieTitle);
      }
      return [...prevFavoritList, movieTitle];
    });
    console.log(favoritList);
  };

  return (
    <div className="main">
      <NavBar
        favoritList={favoritList}
        toggleFavorite={toggleFavorite}
      />
      <div className="contentWrapper">
        <Player />
      </div>
      <Footer />
      <OrientationDetectorDevice />
    </div>
  );
}

export default App;
