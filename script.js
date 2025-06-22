"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menuBtn");
  const closeBtn = document.querySelector(".close-button");
  const menuPage = document.querySelector(".menu-dropdown");
  const overlay = document.querySelector(".overlay");
  const option = document.querySelectorAll(".option");
  const list = document.querySelectorAll(".list");


  menuBtn.addEventListener("click", () => {
    menuPage.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    menuPage.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    menuPage.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  option.forEach((opt, i) => {
    const icon = opt.querySelector("img");

    const toggleList = () => {
      list[i].classList.toggle("hidden");

      const isHidden = list[i].classList.contains("hidden");
      icon.src = isHidden
        ? "images/icon-arrow-down.svg"
        : "images/icon-arrow-up.svg";
      icon.alt = isHidden ? "arrow-down" : "arrow-up";
    };

    const eventType = window.innerWidth >= 1024 ? "mouseover" : "click";
    opt.addEventListener(eventType, toggleList);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      menuPage.classList.remove("hidden");
      overlay.classList.add("hidden");
    } else {
      menuPage.classList.add("hidden");
    }
  });
});
