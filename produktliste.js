/* Gør således at når man klikker på de enkelte kategorier, bliver man ført til en side kun med det emne */
const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const fil = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${cat}`;

/* ændre overskriften på hver kategoriside */
document.querySelector("h2").textContent = cat;

/* henter json data fra linket oven over */
function hentData() {
  console.log(fil);
  fetch(fil)
    .then((response) => response.json())
    .then(visData);
}

/* vælger at putte alt productinfo ind i min html template og at den ligger i "main" */
const temp = document.querySelector("#smallProduktTemplate").content;
const beholder = document.querySelector("main");

/* funktion der gør data synlig på site efter det er hentet i consol.log */
function visData(data) {
  data.forEach((object) => {
    console.log(data);

    /* her klones template til flere styks */
    const klon = temp.cloneNode(true);

    klon.querySelector("h3").textContent = object.productdisplayname;
    klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${object.id}.webp`;
    klon.querySelector(".price").textContent = object.price + "DKK";
    klon.querySelector("#brand").textContent = object.brandname;
    klon.querySelector("#type").textContent = object.articletype;
    klon.querySelector("#category").textContent = object.category;
    klon.querySelector("#rabat").textContent = object.discount + "%";
    klon.querySelector("a").href = "produkt.html?id=" + object.id;

    /* sætter class'en sold out på de items i json filen der står som udsolgt + påsætter den ellers fjernet class "onSale" på de items der er på udsalg. + udregner en "nu" pris efter item er kommet på udsalg */
    if (object.soldout) {
      klon.querySelector("article").classList.add("soldOut");
    }

    if (object.discount) {
      klon.querySelector("article").classList.add("onSale");
      klon.querySelector(".nowprice").textContent = "Now " + `${Math.round(object.price - object.price * (object.discount / 100))} DKK`;
    }
    /** gør at kloningen bliver skudt ud på sitet DEN ER VIGTIG! */
    beholder.appendChild(klon);
  });
}

hentData();

/*
articletype: "Tshirts"
brandname: "Nike"
category: "Apparel"
discount: null
gender: "Men"
id: 1163
price: 895
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
productionyear: 2011
season: "Summer"
soldout: 0
subcategory: "Topwear"
usagetype: "Sports"
*/
