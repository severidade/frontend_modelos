export function createCard(post) {
  const card = document.createElement('div');
  const title = document.createElement('h2');
  const containerPostImg = document.createElement('figure');
  const postImg = document.createElement('img');
  const containerPosts = document.createElement('div');
  const containerSummary = document.createElement('div');

  // Preenche os elementos com os dados do post
  title.textContent = post.title.rendered;
  containerSummary.innerHTML = post.excerpt.rendered;

  // Para acessar as imagens
  const images = post._embedded['wp:featuredmedia'][0].media_details.sizes; 
  // Resgata a imagem especifica, no caso 'large'.
  const image = images.large.source_url;

   /*resgatar o link*/
   const link = post.link;
   console.log(link);

  // Adiciona classes e estrutura ao container de votos
  containerPosts.classList.add('container');
  containerPostImg.appendChild(postImg);

  // Define a URL da imagem como src da tag img
  postImg.src = image;

  // Define o atributo href do link com a URL do post
  // card.href = link;

  // Adiciona a classe 'post' ao elemento card
  card.classList.add('post');
  containerPostImg.classList.add('container_image_post')

  // Adiciona os elementos ao card
  card.appendChild(containerPostImg);
  card.appendChild(title);
  card.appendChild(containerSummary);

  return card;
}