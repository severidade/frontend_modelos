import './CSS/reset.css';
import './CSS/style.css';
import CardList from './componentes/CardList.tsx';
import Header from './componentes/Header.tsx';

function App() {
  return (
    <main>
      <Header title="Weather 360" />
      <CardList />
    </main>
  );
}

export default App;
