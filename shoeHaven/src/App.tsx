import './App.css';
import Footer from './componentes/Footer';
import Sneakers from './data/SneakersData';

import SneakerList from './componentes/SneakerList';

function App() {
  return (
    <div className="main">
      <h3>SHOE HAVEN</h3>
      <p>Esta Aplicação fará uso de CSS Módules e Props Children</p>
      <SneakerList sneakers={ Sneakers } />
      <Footer />
    </div>
  );
}

export default App;
