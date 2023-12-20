const div = document.createElement("div");
div.classList = "module";

const h2 = document.createElement("h2");
h2.textContent = "Contact Us";

const p = document.createElement("p");
p.textContent = "Phone: 555-555-1234";

const p2 = document.createElement("p");
p2.textContent = "Email: placeholder@email.com";

const p3 = document.createElement("p");
p3.textContent =
  "For reservations, please call us at least 24 hours before your desired time. For all other inquiries, feel free to either call or email us directly.";

div.appendChild(h2);
div.appendChild(p);
div.appendChild(p2);
div.appendChild(p3);

export default function () {
  return div;
}
