const url = "https://holmenfrontend.no/wordpress/wp-json/wc/store/products/";
const newestRelases = document.querySelector("#newRealeses");
const newGames = document.querySelector("#newGames");

async function getGames() {
  try {
    const response = await fetch(url);
    const games = await response.json();
    newestRelases.innerHTML = "";
    newGames.innerHTML = "";
    for (let i = 0; i < games.length; i++) {
      let gameId = games[i].id;
      let gameImg = games[i].images[0].src;
      let gameAlt = games[i].images[0].alt;
      let gameName = games[i].name;
      let gameInfo = games[i].description;
      let gamePrice = games[i].price_html;
      if (i < 4) {
        newestRelases.innerHTML += `
              <section class="productFeauterd${i}" id="${gameId}">
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
      if ((i > 4) & (i < 9)) {
        newGames.innerHTML += `
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
    }
  } catch (error) {
    newestRelases.innerHTML = `<p class="errorMessage"> An error occured<p>`;
    newGames.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}

getGames();
