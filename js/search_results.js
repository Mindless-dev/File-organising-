const url = "https://holmenfrontend.no/wordpress/wp-json/wc/store/products/";

const container1 = document.querySelector("#product_group1");
const container2 = document.querySelector("#product_group2");

async function getGames() {
  try {
    const response = await fetch(url);
    const games = await response.json();
    container1.innerHTML = "";
    container2.innerHTML = ``;
    console.log(games);
    for (let i = 0; i < games.length; i++) {
      let gameId = games[i].id;
      let gameImg = games[i].images[0].src;
      let gameAlt = games[i].images[0].alt;
      let gameName = games[i].name;
      let gameInfo = games[i].description;
      let gamePrice = games[i].price_html;
      if (i < 3) {
        container1.innerHTML += `
      <section class="product">
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
      } else {
        container2.innerHTML += `
      <section class="product">
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
    container.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}

getGames();

/*<section class="product">
<a href="product_page.html"><img src="images/product/ACValhalla game cover 1.jpg" alt="assasin's creed: valhall; game cover viking standing in front of ships"></a>
<div class="product_description">
<h2>Game title</h2>
<p>Platform: PS4</p>
<p>State: New</p>
<p>Price: 60 dollars</p>
<p>age: 18+</p>
</div>
<div class="icons_product">
<i class="icon far fa-heart"></i>
<button class="addToCart" id="addToCart"><i class="fa fa-shopping-cart"></i></button>
</div>
</section> */
