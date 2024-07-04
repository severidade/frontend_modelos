/* eslint-disable react/react-in-jsx-scope */
import data from './data/index.ts';
import './App.css';

function App() {
  return (
    <>
      {data.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.movies.map((movie) => (
              <li key={movie.id}>
                <p>
                  {movie.title}
                  {' '}
                  (
                  {movie.released}
                  )
                </p>
                <iframe
                  title={movie.title}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${movie.embedId}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default App;
