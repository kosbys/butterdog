import "./style.css";

document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector("#hamburger").classList.toggle("open");
  document.querySelector("#menu").classList.toggle("hidden");
});

let clickCount = 0;
const triggerClicks = 5;

const logo = document.getElementById("logo");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const videoContainer = document.getElementById("videoContainer");

const videoUrl =
  "https://www.youtube.com/embed/8V5T6oUOEV4?si=Kekk_XrxlYG72Yo6?autoplay=1";

logo.addEventListener("click", () => {
  clickCount++;
  if (clickCount === triggerClicks) {
    videoContainer.innerHTML = `
      <iframe class="w-full h-full" 
        src="${videoUrl}" 
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    clickCount = 0;
  }
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  videoContainer.innerHTML = "";
});
