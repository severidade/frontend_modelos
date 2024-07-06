/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import data from './data/index.ts';
import './App.css';
import Footer from './components/Footer/index.tsx';
import Player from './components/Player/index.tsx';
import Sidebar from './components/Sidebar/index.tsx';

function App() {
  // Inicializa o estado com o primeiro filme da primeira categoria

  const [selectedMovie, setSelectedMovie] = useState(data[0].movies[0]);
  // const [favoritList, setFavoritList] = useState([]);

  return (
    <div className="main">
      <h1 className="app_title">CineHits</h1>
      <div className="contentWrapper">
        <Sidebar
          data={data}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
        <Player selectedMovie={selectedMovie} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
