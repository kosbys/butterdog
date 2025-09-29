import "./style.css";

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  modalCloseButton.classList.add("hidden");
  modalBody.innerHTML = "";
}

function openModal() {
  modalBody.innerHTML = `
    <div class="p-12 bg-gray-100 shadow-xl flex flex-col gap-4">
      <div class="text-center text-primary-bold text-2xl pb-4">השאירו פרטים ונוכל לדבר</div>
      <form action="" class="flex flex-col justify-center">
        <div class="flex flex-col gap-4">
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
שלח/י          
</button>
        </div>
      </form>
      <div>
        <div
          class="text-center pt-4 flex flex-col text-primary-bold text-xl m-auto py-2 px-4 border-4 rounded-lg border-primary"
        >
          דברו איתי
          <span>050-0000000</span>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("flex");
  modal.classList.remove("hidden");

  modalCloseButton.classList.remove("hidden");
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
const heroButton = document.getElementById("heroButton");

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

contactButton.addEventListener("click", openModal);
heroButton.addEventListener("click", openModal);

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
