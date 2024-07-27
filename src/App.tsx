/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useState, useEffect } from 'react';
import data from './data/index2.ts';
import './App.css';
import Footer from './components/Footer/index.tsx';
import Player from './components/Player/index.tsx';
import NavBar from './components/NavBar/index.tsx';
import { Movie } from './types/movie.ts';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

function App() {
  // Inicializa o estado com o primeiro filme da primeira categoria

  const [favoritList, setFavoritList] = useState<string[]>([]);

  const [selectedMovie, setSelectedMovie] = useState<Movie>(data[0].movies[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // ID de rastreamento do Google Analytics
  const trackingId = process.env.REACT_APP_GA_TRACKING_ID;

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
  }, []);

  useEffect(() => {
    if (trackingId) {
      // Cria e insere o script do Google Analytics
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', trackingId);
      };
    }
  }, [trackingId]);

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
          isPlaying={isPlaying}
          toggleFavorite={toggleFavorite}
          togglePlayVideo={togglePlayVideo}
        />
      </div>
      <Footer />
      <OrientationDetectorDevice />
    </div>
  );
}

export default App;
