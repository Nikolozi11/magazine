const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  menu.style.display =
    menu.style.display === "flex" ? "none" : "flex";
});
