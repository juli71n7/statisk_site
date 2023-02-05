const fil = `https://kea-alt-del.dk/t7/api/products?limit=20`;
const imageParth = `https://kea-alt-del.dk/t7/images/webp/640/.webp`;

function hentData() {
  fetch(fil)
    .then((response) => response.json())
    .then(visData);
}

const temp = document.querySelector("#smallProduktTemplate").content;
const beholder = document.querySelector("main");

function visData(data) {
  data.forEach((produkt) => {
    console.log(data);

    const klon = temp.cloneNode(true);
    klon.querySelector("h3").textContent = produkt.productdisplayname;
    klon.querySelector("#pic").src = imageParth;
    klon.querySelector(".price").textContent = produkt.price;
    klon.querySelector("#brand").textContent = produkt.brandname;
    klon.querySelector("#type").textContent = produkt.articletype;
    klon.querySelector("#category").textContent = produkt.category;

    if (produkt.souldOut) {
      klon.querySelector("article").classList.add("soldOut");
    }

    if (produkt.discounted) {
      klon.querySelector("article").classList.add("onSale");
    }
    beholder.appendChild(klon);
  });
}

hentData();

/*
articletype: "Tshirts"
​​
brandname: "Nike"
​​
category: "Apparel"
​​
discount: null
​​
gender: "Men"
​​
id: 1163
​​
price: 895
​​
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
​​
productionyear: 2011
​​
season: "Summer"
​​
soldout: 0
​​
subcategory: "Topwear"
​​
usagetype: "Sports"
*/
