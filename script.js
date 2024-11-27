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


const swiperFullScreen = new Swiper(".swiper-fullscreen", {
    ...swiperSettings,
    slidesPerView: 1,
});

function swiperAutoplayStart() {
    swiper1.autoplay.start();
    swiper2.autoplay.start();
}

function swiperAutoplayStop() {
    swiper1.autoplay.stop();
    swiper2.autoplay.stop();
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

function openWhatsApp(room="") {
    const numero = "+5516997118099"; // insira o número do destinatário
    let mensagem = "Olá, gostaria de fazer uma reserva no hotel!"; // insira a mensagem
    if (!room === "") {
        mensagem = `Olá, gostaria de fazer uma reserva para o quarto ${room}!`;
    }

    const url = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(url, "_blank");
}


