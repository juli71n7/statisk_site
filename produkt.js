const id = 1532;
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imageParth = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#img").src = imageParth;
  document.querySelector("#price").textContent = produkt.price;
  document.querySelector("#color").textContent = produkt.basecolour;
  document.querySelector("#brand").textContent = produkt.brandname;
  document.querySelector(".purchaseBox h3").textContent = produkt.productdisplayname;
}

hentData();
