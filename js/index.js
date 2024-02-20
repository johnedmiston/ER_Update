'use strict';

const openMenuBtn = document.querySelector('#open-menu');
const closeMenuBtn = document.querySelector('#close-menu');
const navigationMenuElement = document.querySelector('#navigation-menu');

/**
 * toggleMobileMenu.
 *
 * open or close the mobile menu.
 * @return {null}
 *
 */
function toggleMobileMenu() {
  navigationMenuElement.classList.toggle('hidden');
}

openMenuBtn.addEventListener('click', toggleMobileMenu);

closeMenuBtn.addEventListener('click', toggleMobileMenu);
