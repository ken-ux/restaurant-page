const div = document.createElement("div");
div.classList = "module";

const h2 = document.createElement("h2");
h2.textContent = "Welcome to Le Café!";

const p = document.createElement("p");
p.textContent =
  "We are a small, independently owned, and imaginary café located in the heart of... wherever you want this to be.";

const p2 = document.createElement("p");
p2.textContent = "Hours: 9:00 — 19:00";

const p3 = document.createElement("p");
p3.textContent = "Thank you for your patronage!";

const p4 = document.createElement("p");
p4.textContent = "♡♡♡";

div.appendChild(h2);
div.appendChild(p);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);

export default function () {
  return div;
}
