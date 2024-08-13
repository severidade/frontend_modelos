/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useState } from 'react';
import data from './data/index2.ts';
import './App.css';
import NavBar from './components/NavBar/index.tsx';
import Player from './components/Player/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';
import { Movie } from './types/movie-types.ts';

function App() {
  // Inicializa o estado com o primeiro filme da primeira categoria

  const [favoritList, setFavoritList] = useState<string[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>(data[0].movies[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleFavorite = (movieTitle: string) => {
    setFavoritList((prevFavoritList) => {
      if (prevFavoritList.includes(movieTitle)) {
        return prevFavoritList.filter((fav) => fav !== movieTitle);
      }
      return [...prevFavoritList, movieTitle];
    });
  };

  const togglePlayVideo = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }, []); /* nao mais */

  return (
    <div className="main">
      <NavBar
        data={data}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        isPlaying={isPlaying}
        togglePlayVideo={togglePlayVideo}
        favoritList={favoritList}
        toggleFavorite={toggleFavorite}
      />
      <div className="contentWrapper">
        <Player
          selectedMovie={selectedMovie}
          favoritList={favoritList}
          toggleFavorite={toggleFavorite}
          /* isPlaying={isPlaying}  nao mais */
          /* togglePlayVideo={togglePlayVideo}  nao mais */
        />
      </div>
      <Footer />
      <OrientationDetectorDevice />
    </div>
  );
}

export default App;
