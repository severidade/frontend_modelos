import '../src/css/reset.css';
import '../src/css/style.css';
import { getBlogData } from './services/api';
import { createCard } from './componentes/createCard';


export async function renderBlogData() {
  const postsElement = document.querySelector('#container');
  postsElement.innerHTML = '';

  try {
    const [posts] = await getBlogData();
    posts.forEach(post => {
      postsElement.appendChild(createCard(post));
    });
  } catch (err) {
    console.warn('ERROR: ', err);
  }
}

renderBlogData();