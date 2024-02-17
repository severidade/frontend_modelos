import styles from './footer.module.css';

function Footer() {
  return (
  <footer>
    <p><strong className={ styles.titulo }> Tecnologias</strong> React - Javascript - Slick Carousel - HTML - CSS </p>
    <p>Este projeto foi desenvolvido por Marco Severo</p>
    <ul className={ styles.menu_social }>
      <li><a className={ styles.social_linkedin } href="https://www.linkedin.com/in/severidade/">linkedin.com/in/severidade</a></li>
      <li><a className={ styles.social_github } href="https://github.com/severidade">github.com/severidade</a> </li>
      {/* <li><a class="social_codpen" href="https://codepen.io/severidade">codepen.io/severidade</a></li> */}
      <li><a className={ styles.social_behance } href="https://www.behance.net/severidade">behance.net/severidade</a></li>
    </ul>
  </footer>
  );
}

export default Footer;