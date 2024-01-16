import '../src/css/reset.css';
import '../src/css/style.css';
import { getBlogData } from './services/api';


export async function renderBlogData() {
  const postsElement = document.querySelector('#container');
  postsElement.innerHTML = '';

  try {
    const [posts] = await getBlogData();
   
    console.log(posts);
  } catch (err) {
    console.warn('ERROR: ', err);
  }
}

renderBlogData();