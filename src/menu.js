const div = document.createElement("div");
div.classList = "module";

const h2 = document.createElement("h2");
h2.textContent = "Menu";

const beverages = document.createElement("h3");
beverages.textContent = "Beverages";

const p = document.createElement("p");
p.textContent = "Chrysanthemum Tea — $1.50";

const p2 = document.createElement("p");
p2.textContent = "Americano Coffee — $2";

const p3 = document.createElement("p");
p3.textContent = "Pomegranate Juice — $2";

const entrees = document.createElement("h3");
entrees.textContent = "Entrees";

const p4 = document.createElement("p");
p4.textContent = "Poached Eggs and Toast — $7";

const p5 = document.createElement("p");
p5.textContent = "Ham and Cheese Panini — $8";

const p6 = document.createElement("p");
p6.textContent = "Mediterranean Wrap — $10";

const desserts = document.createElement("h3");
desserts.textContent = "Desserts";

const p7 = document.createElement("p");
p7.textContent = "Apple Pie Slice — $4";

const p8 = document.createElement("p");
p8.textContent = "Chocolate Chip Muffin — $4";

const p9 = document.createElement("p");
p9.textContent = "Strawberry Parfait — $6";

div.appendChild(h2);
div.appendChild(beverages);
div.appendChild(p);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(entrees);
div.appendChild(p4);
div.appendChild(p5);
div.appendChild(p6);
div.appendChild(desserts);
div.appendChild(p7);
div.appendChild(p8);
div.appendChild(p9);

export default function () {
  return div;
}
