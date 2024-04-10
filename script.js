function pagina() {
  const sectionPosts = document.getElementsByClassName("main_posts");
  var quantPosts = Math.random() * 10;
  for (var i = 0; i < quantPosts; i++) {
    const uniqueParam = `?random=${Math.random() * 1}`;
    const userImg = `<img
  src="https://source.unsplash.com/40x40/?person${uniqueParam}"
  alt=""
  class="user_img imagem"/>
    <div>
      <p class="user_name">nome.usuario</p>
      <p class="user_description">descricao</p>
    </div>`;
    const postImg = `
    <img src="https://source.unsplash.com/375x298/?ramdom${uniqueParam}" alt="" class="imagem"/>
    `;
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
    <div class="post">
    <div class="post_top">
      <div class="post_user">${userImg}</div>
      <div class="post_more">
        <img src="img/Icone=Mais.svg" alt="" />
      </div>
    </div>
    <div class="post_img">${postImg}</div>
    <div class="post_buttons">
      <div>
        <img src="img/Icone=Curtir.svg" alt="" />
        <img src="img/Icone=Comentario.svg" alt="" />
        <img src="img/Icone=Enviar.svg" alt="" />
      </div>
      <div>
        <img src="img/Icone=Salvar.svg" alt="" />
      </div>
    </div>
    <div class="post_description">
      <p class="post_likes">0 curtidas</p>
      <p class="post_caption">Nome do usuário: Meu primeiro post</p>
    </div>
  </div>
    `;
    sectionPosts[0].appendChild(newPost);
  }

  const sectionStories = document.getElementsByClassName("main_stories");
  if (quantPosts <= 4) {
    var soma = 5 - quantPosts;
    quantPosts = quantPosts + soma;
  }
  for (var i = 0; i < quantPosts; i++) {
    const uniqueParam = `?random=${Math.random() * 1}`;
    const storiesImg = `<img
  src="https://source.unsplash.com/60x60/?person${uniqueParam}"
  alt=""
  class="stories_img imagem"/>`;
    const newStorie = document.createElement("div");
    newStorie.innerHTML = `
    <div>
      ${storiesImg}
      <p>nome.usuario</p>
    </div>
    `;
    sectionStories[0].appendChild(newStorie);
  }
}
window.addEventListener("load", function() {
  pagina()
});