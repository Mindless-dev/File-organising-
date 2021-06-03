const container = document.querySelector("#contentContainer");

function getCartItems() {
  for (let x = 0; x < localStorage.length; x++) {
    let productString = localStorage.getItem(`${x}`);
    let productJson = JSON.parse(productString);

    if (productJson != null) {
      container.innerHTML += `
      <section class= "product_description">
      <a href="product_page.html?id=${productJson.id}">
      <img class="product_img" src="${productJson.images[0].src}" alt="${productJson.images[0].alt}"></a>
      <section class="product_text">
      <h2>${productJson.name}</h2>
      <p>${productJson.description}</p>
      <p>${productJson.price_html}</p>
      </section>
      </section>`;
    }
  }
}

getCartItems();

setTimeout(function removeCart() {
  localStorage.clear();
}, 3000);
