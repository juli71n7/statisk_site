const fil = `https://kea-alt-del.dk/t7/api/products`;
const imageParth = `https://kea-alt-del.dk/t7/images/webp/640/.webp`;

function hentData() {
  fetch(fil)
    .then((response) => response.json())
    .then(visData);
}

const temp = document.querySelector("#produktTemplate").content;
const beholder = document.querySelector("main");

function visData(data) {
  data.forEach((produkt) => {
    console.log(data);

    const klon = temp.cloneNode(true);
    klon.querySelector("pic").src = imageParth;
    klon.querySelector("name").textContent = produkt.productdisplayname;
    klon.querySelector("brand").textContent = produkt.brandname;
    klon.querySelector("price").textContent = produkt.price;

    beholder.appendChild(klon);
  });
}

hentData();
