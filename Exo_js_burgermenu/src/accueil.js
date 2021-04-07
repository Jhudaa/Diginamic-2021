/**
 * 
 * @param {string} tag_name 
 * @param {objet} attributes 
 * @param {string} content 
 * @param {domElement} parent_element 
 * @returns 
 */
function CreateWholeDomElement(tag_name, attributes, content, parent_element) {

  const elt = document.createElement(tag_name);

  for (const attribute of attributes) {
    elt.setAttribute(attribute.name, attribute.value);
  };
  elt.textContent = content;
  parent_element.append(elt);

  return elt;
}

const header = new CreateWholeDomElement("header", "", "", document.body);
console.log({header});
const main = new CreateWholeDomElement("main", "", "", document.body);
const footer = new CreateWholeDomElement("footer", "", "", document.body);

const button = new CreateWholeDomElement("i", [{ name: "class", value: "fas fa-hamburger fa-2x" }], " click me", header)
const nav = new CreateWholeDomElement("nav", [{ name: "class", value: "main_nav hidden" }], "", header);

const ul = new CreateWholeDomElement("ul",
  [{
    name: "class",
    value: "list-unstyled" 
  }],
  "",
  nav);

const acc_menu = new CreateWholeDomElement("li", [{name:"id", value: "acc_menu"}], "Accueil", ul);
const acc_sect_menu = new CreateWholeDomElement ("section", [{name:"class", value: "col-6 hidden"}], "Bienvenue dans l'accueil !", main);

const fonct_menu = new CreateWholeDomElement("li", [{name:"id", value: "fonct_menu"}], "Fonctionnalités", ul);
const fonct_sect_menu = new CreateWholeDomElement ("section", [{name:"class", value: "col-6 hidden"}], "Voici les différentes fonctionnalités que nous vous proposons", main);

const actu_menu = new CreateWholeDomElement("li", [{name:"id", value: "actu_menu"}], "Actualités", ul);
const actu_sect_menu = new CreateWholeDomElement ("section", [{name:"class", value: "col-6 hidden"}], "Découvrez nos dernières actualités", main);

const cross = new CreateWholeDomElement ("button", [{name: "id", value:"cross"}], "X", actu_sect_menu);

button.onclick = function () {
  nav.classList.toggle("hidden");
  acc_sect_menu.classList.add("hidden");
  fonct_sect_menu.classList.add("hidden");
  actu_sect_menu.classList.add("hidden");
}

acc_menu.onclick = function () {
  acc_sect_menu.classList.toggle("hidden");
  fonct_sect_menu.classList.add("hidden");
  actu_sect_menu.classList.add("hidden");
  
  acc_menu.classList.add("select");
  fonct_menu.classList.remove("select");
  actu_menu.classList.remove("select");

  acc_sect_menu.append(cross);
  cross.onclick = function () {
    acc_sect_menu.classList.add("hidden");
  }
}

fonct_menu.onclick = function () {
  fonct_sect_menu.classList.toggle("hidden");
  acc_sect_menu.classList.add("hidden");
  actu_sect_menu.classList.add("hidden");

  actu_menu.classList.remove("select");
  fonct_menu.classList.add("select");
  acc_menu.classList.remove("select");

  fonct_sect_menu.append(cross);
  cross.onclick = function () {
    fonct_sect_menu.classList.add("hidden");
  }
}

actu_menu.onclick = function () {
  actu_sect_menu.classList.toggle("hidden");
  fonct_sect_menu.classList.add("hidden");
  acc_sect_menu.classList.add("hidden");

  acc_menu.classList.remove("select");
  fonct_menu.classList.remove("select");
  actu_menu.classList.add("select");

  actu_sect_menu.append(cross);
  cross.onclick = function () {
    actu_sect_menu.classList.add("hidden");
  }
}

