import "./style.css";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

const body = document.querySelector("body");
const content = document.querySelector("#content");
const header = document.createElement("header");
const nav = document.createElement("nav");
const links = ["Home", "Menu", "Contact"];
const pages = [home, menu, contact];

for (let i = 0; i < links.length; i++) {
  let link = document.createElement("h1");
  link.textContent = links[i];
  link.addEventListener("click", () => {
    clearContent();
    content.appendChild(pages[i]());
  });
  nav.appendChild(link);
}

header.appendChild(nav);
body.insertBefore(header, content);

// Set home as the default on page load
content.appendChild(home());

function clearContent() {
  let module = document.querySelector(".module");
  content.removeChild(module);
}
