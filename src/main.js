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
const modalBody = document.getElementById("modalBody");
const contactButton = document.getElementById("contactButton");

const videoUrl =
  "https://www.youtube.com/embed/8V5T6oUOEV4?si=Kekk_XrxlYG72Yo6?autoplay=1";

logo.addEventListener("click", () => {
  clickCount++;
  if (clickCount === triggerClicks) {
    modalBody.innerHTML = `
      <iframe class="w-100 h-100" 
        src="${videoUrl}" 
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;

    modal.showModal();
    closeModal.classList.remove("hidden");
    clickCount = 0;
  }
});

contactButton.addEventListener("click", () => {
  modalBody.innerHTML = `
      <form action="" class="p-12">
      <div class="max-w-fit flex flex-col gap-4">
        <input
          type="text"
          placeholder="שם"
          class="w-full px-4 py-4 rounded-lg font-medium bg-gray-50 border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        />
        <input
          type="text"
          placeholder="טלפון"
          class="w-full px-4 py-4 rounded-lg font-medium bg-gray-50 border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        />
        <textarea
          placeholder="הודעה"
          name=""
          id=""
          class="resize-none w-full px-4 py-4 rounded-lg font-medium bg-gray-50 border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        ></textarea>
        <button
          class="bg-primary hover:bg-primary-bold transition-colors duration-300 px-6 py-2 cursor-pointer text-white rounded-xl"
        >
          KACHOW
        </button>
      </div>
      <div>hi</div>
    </form>
  `;

  modal.showModal();
  closeModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.close();
  closeModal.classList.add("hidden");
  modalBody.innerHTML = "";
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
