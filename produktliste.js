const fil = `https://kea-alt-del.dk/t7/api/products?limit=20`;

function hentData() {
  fetch(fil)
    .then((response) => response.json())
    .then(visData);
}

const temp = document.querySelector("#smallProduktTemplate").content;
const beholder = document.querySelector("main");

function visData(data) {
  data.forEach((object) => {
    console.log(data);

    const klon = temp.cloneNode(true);
    const produktid = object.id;
    const imageParth = `https://kea-alt-del.dk/t7/images/webp/640/${produktid}.webp`;

    klon.querySelector("h3").textContent = object.productdisplayname;
    klon.querySelector("img").src = imageParth;
    klon.querySelector(".price").textContent = object.price + "DKK";
    klon.querySelector("#brand").textContent = object.brandname;
    klon.querySelector("#type").textContent = object.articletype;
    klon.querySelector("#category").textContent = object.category;

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

/*
  if (produkt.soldOut) {
    klon.querySelector("article").classList.add("soldOut");
  }

  if (produkt.discounted) {
    klon.querySelector("article").classList.add("onSale");
  }
  */
