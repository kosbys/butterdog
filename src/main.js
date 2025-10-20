import "./style.css";

let clickCount = 0;
const triggerClicks = 5;

const logo = document.getElementById("logo");
const contactButton = document.getElementById("contactButton");
const heroButton = document.getElementById("heroButton");
const slides = document.getElementsByClassName("slide-image");
const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  hamburgerMenu.classList.toggle("hidden");
});

logo.addEventListener("click", () => {
  clickCount++;
  if (clickCount === triggerClicks) {
    modalBody.innerHTML = `
        <video class="w-100 h-100" 
          src="/butterdog/butterdog.webm" 
          title="Butterdog"
          autoplay
          controls
          loop
          >
        </video>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    modalCloseButton.classList.remove("hidden");
    clickCount = 0;
  }
});

let buffer = "";

document.addEventListener("keydown", (e) => {
  buffer += e.key.toLowerCase();

  if (buffer.length > 3) {
    buffer = "";
  }

  if (buffer === "cat") {
    [...slides].forEach((slide) => {
      const rand = Math.floor(Math.random() * 2);
      switch (rand) {
        case 0:
          slide.src = "https://files.catbox.moe/4qdmme.jpg";
          break;
        case 1:
          slide.src =
            "https://i.pinimg.com/originals/18/f3/6d/18f36d3c70be9d4fae7256335d1cdf90.png";
          break;
        default:
          break;
      }
    });

    document
      .querySelector("#hero")
      .classList.add(`bg-[url("/butterdog.webp")]`);
  }
});

console.log(
  "                     , \r\n                ,.  | \\ \r\n               |: \\ ; :\\ \r\n               :' ;\\| ::\\ \r\n                \\ : | `::\\ \r\n                _)  |   `:`. \r\n              ,' , `.    ;: ; \r\n            ,' ;:  ;\"'  ,:: |_ \r\n           /,   ` .    ;::: |:`-.__ \r\n        _,' _o\\  ,::.`:' ;  ;   . ' \r\n    _,-'           `:.          ;\"\"\\, \r\n ,-'                     ,:         `-;, \r\n \\,                       ;:           ;--._ \r\n  `.______,-,----._     ,' ;:        ,/ ,  ,` \r\n         / /,-';'  \\     ; `:      ,'/,::.::: \r\n       ,',;-'-'_,--;    ;   :.   ,',',;:::::: \r\n      ( /___,-'     `.     ;::,,'o/  ,::::::: \r\n       `'             )    ;:,'o /  ;\"-   -:: \r\n                      \\__ _,'o ,'         ,:: \r\n                         ) `--'       ,..:::: \r\n      -libi-              ; `.        ,::::::: \r\n                          ;  ``::.    ::::::: "
);
