/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import NavBar from './components/NavBar/index.tsx';
import Player from './components/Player/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

function App() {
  return (
    <div className="main">
      <NavBar />
      <Player />
      <Footer />
      <OrientationDetectorDevice />
    </div>
  );
}

export default App;
