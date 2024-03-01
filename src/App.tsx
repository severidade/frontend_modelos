import './App.css';
import Footer from './componentes/Footer';
import Sneakers from './data/SneakersData';

import SneakerList from './componentes/SneakerList';
import Header from './componentes/Header';
import OrientationDetectorDevice from './componentes/OrientationDetectorDevice';

function App() {
  return (
    <div className="main">
      <Header />
      <SneakerList sneakers={ Sneakers } />
      <Footer />
      <OrientationDetectorDevice />
    </div>
  );
}

export default App;
