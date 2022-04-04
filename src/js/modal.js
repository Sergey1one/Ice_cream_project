// Modal window - BUY-NOW

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
<<<<<<< Updated upstream
})();
=======
})(); 

// Modal window - PRODUCT1
>>>>>>> Stashed changes

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product1-open]"),
    closeModalBtn: document.querySelector("[data-modal-product1-close]"),
<<<<<<< Updated upstream
    modal: document.querySelector("[data-modal-product1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product2-open]"),
    closeModalBtn: document.querySelector("[data-modal-product2-close]"),
    modal: document.querySelector("[data-modal-product2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product3-open]"),
    closeModalBtn: document.querySelector("[data-modal-product3-close]"),
    modal: document.querySelector("[data-modal-product3]"),
=======
    modal: document.querySelector("[data-product1-modal]"),
>>>>>>> Stashed changes
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
<<<<<<< Updated upstream
})();
=======
})(); 
>>>>>>> Stashed changes
