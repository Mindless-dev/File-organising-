const url = "https://holmenfrontend.no/wordpress/wp-json/wc/store/products/";

const container1 = document.querySelector(".liked_games");
const container2 = document.querySelector(".recomended");
const form = document.querySelector("form");
const formSubmit = document.querySelector("#submitBtn");
const gameTitle = document.querySelector("#game-title");
const gameTitleError = document.querySelector("#titleError");
const price = document.querySelector("#price");
const priceError = document.querySelector("#priceError");
const formSucess = document.querySelector("#formCompleted");
const formInputs = document.querySelector("#formInputs");

function submitForm(event) {
  event.preventDefault();
  let validationCounter = 0;
  if (gameTitle.value.length > 0) {
    gameTitleError.style.display = "none";
    validationCounter++;
  } else {
    gameTitleError.style.display = "flex";
    gameTitleError.style.margin = "10px auto";
  }

  if ((price.value.length > 0) & (parseInt(price.value) > 0)) {
    priceError.style.display = "none";
    validationCounter++;
  } else {
    priceError.style.display = "flex";
    priceError.style.margin = "10px auto";
  }

  if (validationCounter === 2) {
    formSucess.style.display = "flex";
    formInputs.style.display = "none";
    setTimeout(function () {
      formInputs.style.display = "block";
      formSucess.style.display = "none";
      price.value = "";
      gameTitle.value = "";
    }, 3000);
  }
}

formSubmit.addEventListener("click", submitForm);

async function getGames() {
  try {
    const response = await fetch(url);
    const games = await response.json();
    container1.innerHTML = ``;
    container2.innerHTML = ``;
    for (let i = 0; i < games.length; i++) {
      let gameId = games[i].id;
      let gameImg = games[i].images[0].src;
      let gameAlt = games[i].images[0].alt;
      let gameName = games[i].name;
      let gameInfo = games[i].description;
      let gamePrice = games[i].price_html;
      if (i < 4) {
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
      }
      if ((i > 4) & (i < 9)) {
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
    container1.innerHTML = `<p class="errorMessage"> An error occured<p>`;
    container2.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}

getGames();
