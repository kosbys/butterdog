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

const slides = document.getElementsByClassName("slide-image");

let buffer = "";

document.addEventListener("keydown", (e) => {
  buffer += e.key.toLowerCase();

  if (buffer.length > 3) {
    buffer = "";
  }

  if (buffer === "cat") {
    [...slides].forEach((slide) => {
      slide.src = "https://files.catbox.moe/4qdmme.jpg";
    });

    document
      .querySelector("#hero")
      .classList.add(
        `bg-[url(https://media1.tenor.com/m/1a6RFI10-oYAAAAd/butter-dog.gif)]`
      );
  }
});

console.log(
  "                     , \r\n                ,.  | \\ \r\n               |: \\ ; :\\ \r\n               :' ;\\| ::\\ \r\n                \\ : | `::\\ \r\n                _)  |   `:`. \r\n              ,' , `.    ;: ; \r\n            ,' ;:  ;\"'  ,:: |_ \r\n           /,   ` .    ;::: |:`-.__ \r\n        _,' _o\\  ,::.`:' ;  ;   . ' \r\n    _,-'           `:.          ;\"\"\\, \r\n ,-'                     ,:         `-;, \r\n \\,                       ;:           ;--._ \r\n  `.______,-,----._     ,' ;:        ,/ ,  ,` \r\n         / /,-';'  \\     ; `:      ,'/,::.::: \r\n       ,',;-'-'_,--;    ;   :.   ,',',;:::::: \r\n      ( /___,-'     `.     ;::,,'o/  ,::::::: \r\n       `'             )    ;:,'o /  ;\"-   -:: \r\n                      \\__ _,'o ,'         ,:: \r\n                         ) `--'       ,..:::: \r\n      -libi-              ; `.        ,::::::: \r\n                          ;  ``::.    ::::::: "
);
