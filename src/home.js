const div = document.createElement("div");
div.classList = "module";

const h2 = document.createElement("h2");
h2.textContent = "Home";

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit amet";

div.appendChild(h2);
div.appendChild(p);

export default function() {
    return div;
}