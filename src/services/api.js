const API_BASE = 'https://blog.apiki.com/wp-json/wp/v2';

export async function getPosts( ){
  const response = await fetch(`${API_BASE}/posts?_embed`);
  if(!response.ok) {
    throw new Error (`Erro ao buscar lista de posts`);
  }
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const response = await fetch(`${API_BASE}/categories`);
  if(!response.ok) {
    throw new Error (`Erro ao buscar lista de categorias`);
  }
  const data = await response.json();
  return data;
}

export function getBlogData(){
  const promises = [getPosts(), getCategories()];
  return Promise.all(promises);
}