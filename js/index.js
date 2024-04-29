"use strict";

const openMenuBtn = document.querySelector("#open-menu");
const navigationMenuElement = document.querySelector("#navigation-menu");
const closeImg = document.querySelector(".close-menu-img");
const menuImg = document.querySelector(".open-menu-img");

/**
 * toggleMobileMenu.
 *
 * open or close the mobile menu.
 * @return {null}
 *
 */
function toggleMobileMenu() {
  navigationMenuElement.classList.toggle("hidden");
  closeImg.classList.toggle("hide");
  menuImg.classList.toggle("hide");
  overlay.classList.toggle("hide");
}

openMenuBtn.addEventListener("click", toggleMobileMenu);
