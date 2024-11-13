import "./style.css";
import { home } from "./main.js"
import { menu } from "./menu.js";
import {contact} from "./contact.js";
let div = document.getElementById('content');
main();

function main() {
    home.addhmtl()
    home.createElement();
    home.hover();
    home.center();
}

function mainMenu() {
    menu.addhmtl();
    menu.createElement();
    menu.main();
}
function contactPage(){
    contact.addhmtl();
    contact.createElement();
    contact.center();
}
document.getElementById('menu').addEventListener('click', () => {
    div.textContent = "";
    mainMenu();
})
document.getElementById('home').addEventListener('click', () => {
    div.textContent = "";
    main();
});
document.getElementById('contact').addEventListener('click',()=>{
    div.textContent="";
    contactPage();
})

