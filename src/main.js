import "./style.css";

document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector("#hamburger").classList.toggle("open");
  document.querySelector("#menu").classList.toggle("hidden");
});
