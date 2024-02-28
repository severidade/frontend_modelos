import styles from './heder.module.css';

function Header() {
  return (
    <header>
      <h1 className={ styles.title_app }>SHOE HAVEN</h1>
      <p>Onde o Passo Encontra o Estilo</p>
    </header>
  );
}

export default Header;
