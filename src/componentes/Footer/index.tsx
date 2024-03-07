/* eslint-disable max-len */
import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <p>
        <strong className={ styles.titulo }> Tecnologias</strong>
        {' '}
        React - Javascript - TypeScript - HTML - CSS - Slick Carousel - Framer Motion - ESLint
        {' '}
      </p>
      <p>Este projeto foi desenvolvido por Marco Severo.</p>
      <ul className={ styles.menu_social }>
        <li>
          <a className={ styles.social_linkedin } target="_blank" href="https://www.linkedin.com/in/severidade/" rel="noreferrer">linkedin.com/in/severidade</a>
        </li>
        <li>
          <a className={ styles.social_github } target="_blank" href="https://github.com/severidade" rel="noreferrer">github.com/severidade</a>
        </li>
        {/* <li><a class="social_codpen" href="https://codepen.io/severidade">codepen.io/severidade</a></li> */}
        <li>
          <a className={ styles.social_behance } target="_blank" href="https://www.behance.net/severidade" rel="noreferrer">behance.net/severidade</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
