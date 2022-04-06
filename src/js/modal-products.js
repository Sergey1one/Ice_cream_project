(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product1-open]"),
    closeModalBtn: document.querySelector("[data-modal-product1-close]"),
    modal: document.querySelector("[data-modal-product1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs1 = {
    openModalBtn: document.querySelector("[data-modal-product2-open]"),
    closeModalBtn: document.querySelector("[data-modal-product2-close]"),
    modal: document.querySelector("[data-modal-product2]"),
  };

  refs1.openModalBtn.addEventListener("click", toggleModal);
  refs1.closeModalBtn.addEventListener("click", toggleModal);


  function toggleModal() {
    refs1.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs2 = {
    openModalBtn: document.querySelector("[data-modal-product3-open]"),
    closeModalBtn: document.querySelector("[data-modal-product3-close]"),
    modal: document.querySelector("[data-modal-product3]"),
  };

  refs2.openModalBtn.addEventListener("click", toggleModal);
  refs2.closeModalBtn.addEventListener("click", toggleModal);


  function toggleModal() {
    refs2.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs3 = {
    openModalBtn: document.querySelector("[data-modal-product4-open]"),
    closeModalBtn: document.querySelector("[data-modal-product4-close]"),
    modal: document.querySelector("[data-modal-product4]"),
  };

  refs3.openModalBtn.addEventListener("click", toggleModal);
  refs3.closeModalBtn.addEventListener("click", toggleModal);


  function toggleModal() {
    refs3.modal.classList.toggle("is-hidden");
  }
})();