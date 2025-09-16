import "./style.css";

function closeModal() {
  modal.close();
  modalCloseButton.classList.add("hidden");
  modalBody.innerHTML = "";
}

document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector("#hamburger").classList.toggle("open");
  document.querySelector("#menu").classList.toggle("hidden");
});

let clickCount = 0;
const triggerClicks = 5;

const logo = document.getElementById("logo");
const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("closeModal");
const modalBody = document.getElementById("modalBody");
const contactButton = document.getElementById("contactButton");

const videoUrl =
  "https://www.youtube.com/embed/8V5T6oUOEV4?si=Kekk_XrxlYG72Yo6?autoplay=1";

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

    modal.showModal();
    modalCloseButton.classList.remove("hidden");
    clickCount = 0;
  }
});

contactButton.addEventListener("click", () => {
  modalBody.innerHTML = `
      <div class="p-12 bg-gray-100 shadow-xl">
      <div class="text-center">כותרת</div>
        <form action="" class="flex flex-col justify-center">
          <div class="flex flex-col p-6 gap-4 ">
            <input
              type="text"
              required
              placeholder="שם *"
              class="w-full px-2 bg-white py-2 outline-1 outline-primary-bold"
            />
            <input
              type="text"
              required
              placeholder="טלפון *"
              class="w-full px-2 bg-white py-2 outline-1 outline-primary-bold"
            />
            <textarea
              required
              placeholder="הודעה *"
              name=""
              id=""
              class="resize-y w-full px-2 bg-white py-2 outline-1 outline-primary-bold"
            ></textarea>
            <button
              class="rounded-sm transition ease-in-out bg-primary px-4 py-2 hover:bg-primary-bold text-white duration-300 cursor-pointer"
            >
              שלח
            </button>
          </div>
        </form>
        <div class="text-center">
          <div>דברו איתי 050-0000000</div>
        </div>
      </div>
  `;

  modal.showModal();
  modalCloseButton.classList.remove("hidden");
});

modalCloseButton.addEventListener("click", closeModal);

const slides = document.getElementsByClassName("slide-image");

let buffer = "";

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }

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
      .classList.add(`bg-[url("/butterdog.webp")]`);
  }
});

console.log(
  "                     , \r\n                ,.  | \\ \r\n               |: \\ ; :\\ \r\n               :' ;\\| ::\\ \r\n                \\ : | `::\\ \r\n                _)  |   `:`. \r\n              ,' , `.    ;: ; \r\n            ,' ;:  ;\"'  ,:: |_ \r\n           /,   ` .    ;::: |:`-.__ \r\n        _,' _o\\  ,::.`:' ;  ;   . ' \r\n    _,-'           `:.          ;\"\"\\, \r\n ,-'                     ,:         `-;, \r\n \\,                       ;:           ;--._ \r\n  `.______,-,----._     ,' ;:        ,/ ,  ,` \r\n         / /,-';'  \\     ; `:      ,'/,::.::: \r\n       ,',;-'-'_,--;    ;   :.   ,',',;:::::: \r\n      ( /___,-'     `.     ;::,,'o/  ,::::::: \r\n       `'             )    ;:,'o /  ;\"-   -:: \r\n                      \\__ _,'o ,'         ,:: \r\n                         ) `--'       ,..:::: \r\n      -libi-              ; `.        ,::::::: \r\n                          ;  ``::.    ::::::: "
);
