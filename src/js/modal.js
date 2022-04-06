(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn2: document.querySelector("[data-modal-open2]"), 
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs11 = {
    openModalBtn: document.querySelector("[data-modal-open11]"), 
    closeModalBtn: document.querySelector("[data-modal-close11]"),
    modal: document.querySelector("[data-modal11]"),
  };

  refs11.openModalBtn.addEventListener("click", toggleModal);
  refs11.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs11.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs12 = {
    openModalBtn: document.querySelector("[data-modal-open12]"), 
    closeModalBtn: document.querySelector("[data-modal-close12]"),
    modal: document.querySelector("[data-modal12]"),
  };

  refs12.openModalBtn.addEventListener("click", toggleModal);
  refs12.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs12.modal.classList.toggle("is-hidden");
  }
})();