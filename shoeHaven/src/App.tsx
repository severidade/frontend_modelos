import './App.css';
import Footer from './componentes/Footer';
import Sneakers from './data/SneakersData';

import SneakerList from './componentes/SneakerList';
import Header from './componentes/Header';

function App() {
  return (
    <div className="main">
      <Header />
      <SneakerList sneakers={ Sneakers } />
      <Footer />
    </div>
  );
}

export default App;
