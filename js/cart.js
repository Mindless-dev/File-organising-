const cartButton = document.querySelectorAll("#addToCart");
const counter = document.querySelector(".icon_counter");
let itemsInCart = 0;

function addToCart() {
  itemsInCart++;
  counter.innerHTML = itemsInCart;
  counter.style.display = "block";
}

for (let i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", addToCart);
}
