import emailjs from "@emailjs/browser";

const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("closeModal");
const modalBody = document.getElementById("modalBody");
const contactButton = document.getElementById("contactButton");
const heroButton = document.getElementById("heroButton");

const initOptions = {
  publicKey: "CEgl1MVi-ys4CvCRK",
  blockHeadless: true,
};

emailjs.init(initOptions);

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  modalCloseButton.classList.add("hidden");
  modalBody.innerHTML = "";
}

function openModal() {
  modalBody.innerHTML = `
    <div class="p-12 bg-gray-100 shadow-xl flex flex-col gap-4 modal-container">
      <div class="text-center text-primary-bold text-2xl pb-4">השאירו פרטים ונוכל לדבר</div>
      <form id="contact-form" class="flex flex-col justify-center">
        <div class="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="שם *"
            name="name"
            class="w-full px-2 bg-white py-2 outline-1 outline-primary-bold"
          />
          <input
            required
            placeholder="טלפון *"
            type="num"
            name="phone"
            class="w-full px-2 bg-white py-2 outline-1 outline-primary-bold"
          />
          <textarea
            required
            placeholder="הודעה *"
            name="message"
            class="resize-y w-full px-2 bg-white py-2 outline-1 outline-primary-bold"
          ></textarea>
          <button
            type="submit"
            class="submit-button disabled:hover:bg-primary-light disabled:bg-primary-light disabled:opacity-40 disabled:cursor-none rounded-sm transition ease-in-out bg-primary px-4 py-2 hover:bg-primary-bold text-white duration-300 cursor-pointer"
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
  const form = document.querySelector("#contact-form");

  modal.classList.add("flex");
  modal.classList.remove("hidden");

  modalCloseButton.classList.remove("hidden");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const modalContainer = document.querySelector(".modal-container");
    const submitButton = document.querySelector(".submit-button");

    const spinner = document.createElement("span");
    spinner.classList.add("loader", "self-center");

    modalContainer.appendChild(spinner);

    // add spinner and disable button
    submitButton.disabled = true;

    emailjs
      .sendForm("service_mtoxfuk", "template_dyfff5f", "#contact-form")
      .then(
        (res) => {
          console.log(res);
          const message = document.createElement("span");
          message.classList.add("text-center", "text-2xl", "text-primary-bold");
          message.textContent = "תודה שפנית";

          spinner.remove();
          submitButton.disabled = false;

          modalContainer.appendChild(message);
        },
        (error) => {
          console.error(error);
        }
      );
  });
}

modalCloseButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

contactButton.addEventListener("click", openModal);
heroButton.addEventListener("click", openModal);
