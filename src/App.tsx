import './CSS/reset.css';
import './CSS/style.css';
import CardList from './componentes/CardList.tsx';
import Header from './componentes/Header.tsx';
import OrientationDetectorDevice from './componentes/OrientationDetectorDevice/index.tsx';
import Footer from './componentes/footer/index.tsx';

function App() {
  return (
    <main>
      <Header title="Weather 360" />
      <CardList />
      <Footer />
      <OrientationDetectorDevice />
    </main>
  );
}

export default App;
