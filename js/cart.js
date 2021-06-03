const counter = document.querySelector(".icon_counter");
let itemsInCart = 0;

function addToCart() {
  itemsInCart++;
  counter.innerHTML = itemsInCart;
  counter.style.display = "block";
  const productId = this.parentNode.parentNode.id;
  const url3 =
    "https://holmenfrontend.no/wordpress/wp-json/wc/store/products/" +
    productId;
  async function getGame() {
    try {
      const response = await fetch(url3);
      const game = await response.json();
      localStorage.setItem(`${localStorage.length}`, JSON.stringify(game));
    } catch (error) {
      console.log(error);
    }
  }
  getGame();
}

setTimeout(function () {
  const cartButton = document.querySelectorAll("#addToCart");
  for (let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener("click", addToCart);
  }
}, 2000);

/*localStorage.setItem();
console.log(localStorage);
localStorage.clear();*/
