const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

toggle.addEventListener("click", ()=> {
  const isActive = nav.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isActive);
})