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

    klon.querySelector("h3").textContent = object.productdisplayname;
    klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${object.id}.webp`;
    klon.querySelector(".price").textContent = object.price + "DKK";
    klon.querySelector("#brand").textContent = object.brandname;
    klon.querySelector("#type").textContent = object.articletype;
    klon.querySelector("#category").textContent = object.category;
    klon.querySelector("#rabat").textContent = object.discount + "%";
    klon.querySelector("a").href = "produkt.html?id=" + object.id;

    if (object.soldout) {
      klon.querySelector("article").classList.add("soldOut");
    }

    if (object.discount) {
      klon.querySelector("article").classList.add("onSale");
      klon.querySelector(".nowprice").textContent = "Now " + `${Math.round(object.price - object.price * (object.discount / 100))} DKK`;
    }

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
