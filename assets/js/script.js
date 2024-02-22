"use strict";

const menuBtn = document.querySelector(".menu-btn");
const lineTop = document.querySelector(".line-top");
const lineMiddle = document.querySelector(".line-middle");
const lineBottom = document.querySelector(".line-bottom");
const navLinks = document.querySelector(".nav-links");
const navbarMobile = document.querySelector(".navbar-mobile");

const handleMenuClick = () => {
  if (lineTop.classList.contains("active")) {
    lineTop.classList.remove("active");
    lineMiddle.classList.remove("active");
    lineBottom.classList.remove("active");
    navLinks.classList.remove("active");
    navbarMobile.classList.remove("active");
  } else {
    lineTop.classList.add("active");
    lineMiddle.classList.add("active");
    lineBottom.classList.add("active");
    navLinks.classList.add("active");
    navbarMobile.classList.add("active");
  }
};

menuBtn.addEventListener("click", () => handleMenuClick());
