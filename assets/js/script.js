"use strict";

const menuBtn = document.querySelector(".menu-btn");
const lineTop = document.querySelector(".line-top");
const lineMiddle = document.querySelector(".line-middle");
const lineBottom = document.querySelector(".line-bottom");

const handleMenuClick = () => {
  if (lineTop.classList.contains("active")) {
    lineTop.classList.remove("active");
    lineMiddle.classList.remove("active");
    lineBottom.classList.remove("active");
  } else {
    lineTop.classList.add("active");
    lineMiddle.classList.add("active");
    lineBottom.classList.add("active");
  }
};

menuBtn.addEventListener("click", () => handleMenuClick());
