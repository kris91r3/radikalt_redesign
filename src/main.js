import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

const btn = document.querySelector(".toggle-btn");

const nav = document.querySelector("nav");

// cookies
const accepterCookie = document.querySelector("#accepter");
const afvisCookie = document.querySelector("#afvis");
const boks = document.querySelector("#cookieboks");

accepterCookie.addEventListener("click", fjernBoks);
afvisCookie.addEventListener("click", fjernBoks);

function fjernBoks() {
  boks.classList.add("hidden");
  sessionStorage.setItem("fjernboks", true);
}

if (sessionStorage.getItem("fjernboks")) {
  boks.classList.add("hidden");
}
