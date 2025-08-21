const toggle_btn = document.querySelector('.toggle');
const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');
const menu = document.querySelector('.nav-manu');

toggle_btn.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
        open.style.display = 'none';
        close.style.display = 'block';
    }
    else {
        open.style.display = 'block';
        close.style.display = 'none';
    }
    menu.classList.toggle('active');
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    dots: false,
    centerMode:true,
    infinite: true,
    responsive: {
        0: {
            slidesToShow: 1,
            arrows: true
        },
        480: {
            sliderToShow: 2,
            arrows: true,
        },
        1240: {
            arrows: true,
            slidesToShow: 3,
        }
    },
});

const prev = document.querySelector('.a11y-slider-prev');
const next = document.querySelector('.a11y-slider-next');
prev.innerHTML = "<";
next.innerHTML = ">";