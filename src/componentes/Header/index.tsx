import styles from './heder.module.css';

function Header() {
  return (
    <header>
      <h1 className={ styles.title_app }>SHOE HAVEN</h1>
      <p>Esta Aplicação fará uso de CSS Módules e Props Children</p>
    </header>
  );
}

export default Header;
