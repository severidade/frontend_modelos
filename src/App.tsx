/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import data from './data/index.ts';
import './App.css';
import Footer from './components/Footer/index.tsx';

function App() {
  // Inicializa o estado com o primeiro filme da primeira categoria
  const [selectedMovie, setSelectedMovie] = useState(data[0].movies[0]);

  return (
    <div className="main">
      <div className="sidebar">
        <h2>Lista de filmes por categoria</h2>
        <div>
          {data.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <div className="movie_list">
                {category.movies.map((movie) => (
                  <button
                    key={movie.id}
                    onClick={() => setSelectedMovie(movie)}
                    type="button"
                    className={selectedMovie.title === movie.title ? 'selected-button' : ''}
                  >
                    {movie.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="player">
        {selectedMovie && (
          <div>
            <h2>
              {selectedMovie.title}
              {' '}
              (
              {selectedMovie.released}
              )
            </h2>
            <iframe
              title={selectedMovie.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedMovie.embedId}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
