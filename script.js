AOS.init();

const swiperSettings = {
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        1100: {
            slidesPerView: 2
        },
        240: {
            slidesPerView: 1,
        }
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: true,
}

const swiper1 = new Swiper(".swiper1", swiperSettings);

const swiper2 = new Swiper(".swiper2", {
    ...swiperSettings,
    autoplay: {
        ...swiperSettings.autoplay,
        reverseDirection: true,
    }
});

function swiperAutoplayStart() {
    swiper1.autoplay.start();
    swiper2.autoplay.start();
    swiper3.autoplay.start();
}

function swiperAutoplayStop() {
    swiper1.autoplay.stop();
    swiper2.autoplay.stop();
    swiper3.autoplay.stop();
}

window.onload = () => {
    window.addEventListener("focus", swiperAutoplayStart);
    window.addEventListener("blur", swiperAutoplayStop);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            swiperAutoplayStart();
        } else {
            swiperAutoplayStop();
        }
    });
}

function openWhatsApp() {
    const numero = "+5516997118099"; // insira o número do destinatário
    const mensagem = "Olá, gostaria de fazer uma reserva no hotel!"; // insira a mensagem
    const url = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(url, "_blank");
}

const carouselInner = document.querySelector('.carousel-inner');
 const paginationButtons = document.querySelectorAll('.pagination button');
  let currentIndex = 0;
   function updateCarousel() { 
    const images = carouselInner.querySelectorAll('img');
        images.forEach((img, index) => { 
            img.classList.toggle('active', index === currentIndex);
        });
        paginationButtons.forEach((button, index) => {
            button.classList.toggle('active', index === currentIndex);
        });
    }
    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', () => { currentIndex = index;
            updateCarousel();
        });
    });
    updateCarousel();
    window.addEventListener('resize', updateCarousel);

