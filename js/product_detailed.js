const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const containerProduct = document.querySelector("#single_product");
const url =
  "https://holmenfrontend.no/wordpress/wp-json/wc/store/products/" + id;

const url2 = "https://holmenfrontend.no/wordpress/wp-json/wc/store/products/";
const containerReccomended = document.querySelector(".recomended");

async function getGame() {
  try {
    const response = await fetch(url);
    const game = await response.json();
    createGameHtml(game);
  } catch (error) {
    containerProduct.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}

getGame();

function createGameHtml(game) {
  try {
    containerProduct.innerHTML = `
    <section class="single_product" id="${game.id}">
    <h2>${game.name}</h2>
    <img src="${game.images[0].src}" alt="${game.images[0].alt}">
    <h2>Description of game </h2>
    <div class="product_description">
    <p>${game.short_description}</p>
    <div class="description_price"> 
    <p>${game.description}</p>
    <p>${game.price_html}</p>
    </div>
    </div>
    <div class="icons_product">
    <i class="product_icon far fa-heart"></i>
              <button class="addToCart_product" id="addToCart"><i class="fa fa-shopping-cart"></i></button>
  </div>`;
  } catch (error) {
    containerProduct.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}

async function getAllGames() {
  try {
    const response = await fetch(url2);
    const games = await response.json();
    containerReccomended.innerHTML = ``;
    for (let i = 0; i < 4; i++) {
      let gameId = games[i].id;
      let gameImg = games[i].images[0].src;
      let gameAlt = games[i].images[0].alt;
      let gameName = games[i].name;
      let gameInfo = games[i].description;
      let gamePrice = games[i].price_html;
      containerReccomended.innerHTML += `
              <section class="product" id="${gameId}">
              <a href="product_page.html?id=${gameId}"> <img 
              src="${gameImg}" alt=${gameAlt}/></a>
              <h3>${gameName}</h3>
              <div class="product_description">
              <p> ${gameInfo}</p>
              <p>price:${gamePrice}</p>
              </div>
              <div class="icons_product">
              <i class="icon far fa-heart"></i>
              <button class="addToCart" id="addToCart"><i class="fa fa-shopping-cart"></i></button>
              </div>
              </section>`;
    }
  } catch (error) {
    container.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}
getAllGames();
