var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });