import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

const btn = document.querySelector(".toggle-btn");

const nav = document.querySelector("nav");

// Burgermenu
