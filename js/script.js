//Swiper
new Swiper('.hero__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.hero__slider-btn_next',
        prevEl: '.hero__slider-btn_prev'
    },
    autoplay: {
        delay: 3000
    },
    breakpoints: {

        320: {
            slidesPerView: 1
        },

        560: {
            slidesPerView: 2,
            spaceBetween: 8
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
})

// Footer year
const footerCopyrightYear = document.querySelector('.footer__copyright span');
const currentYear = new Intl.DateTimeFormat('RU-ru', {year: 'numeric'}).format(new Date());
footerCopyrightYear.textContent = currentYear;

//Calculator
const calcForm = document.querySelector('.calc__form');
const calcResultSquare = document.querySelector('.calc__result-square');
const calcResultLength = document.querySelector('.calc__result-length');

const tariff = {
    economy: 550,
    comfort: 1400,
    premium: 2700
};

calcForm.addEventListener('input', () => {
    calcForm.elements[7].disabled = !(calcForm.width.value > 0 && calcForm.length.value > 0);
})
calcForm.addEventListener('submit', event => {
    event.preventDefault();
    if (calcForm.width.value > 0 && calcForm.length.value > 0) {
        const square = calcForm.width.value * calcForm.length.value;
        const price = square * tariff[calcForm.rate.value];
        calcResultSquare.textContent = String(square);
        calcResultLength.textContent = String(price);
        calcForm.reset();
        calcForm.elements[7].disabled = true;
        calcForm.elements[8].disabled = !(calcResultSquare.textContent !== '0' && calcResultLength.textContent !== '0');
    }
})


//Modal
const modal = document.querySelector('.modal');
const showModalBtns = document.querySelectorAll('.js-modal');
const modalCloseBtn = document.querySelector('.modal__close');
showModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        modal.showModal();
    })
})
modalCloseBtn.addEventListener('click', () => {
    modal.close();
    document.body.style.overflow = '';
})

// Mask for phone-input modal
new Inputmask({'mask': '+7(999)999-99-99'}).mask(document.querySelector('.phone__input'));

//Validation modal inputs
new JustValidate('.modal__form', {
    errorLabelCssClass: 'error',
    errorLabelStyle: {
        color: 'tomato'
    }
})
    .addField('.name__input', [
        {
            rule: 'required',
            errorMessage: 'Обязательное поле'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Не менее 3-х символов'
        },
    ])
    .addField('.phone__input', [
        {
            rule: 'required',
            errorMessage: 'Обязательное поле'
        },
        {
            validator: value => {
                const num = document.querySelector('.phone__input').inputmask.unmaskedvalue();
                return num.length === 10;
            },
            errorMessage: 'Введите корректный номер'
        }
    ])
    .onSuccess((event) => {
        const form = event.currentTarget;
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: form.name.value,
                phone: form.phone.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                form.reset();
                alert(`Спасибо ${data.name}, мы с вами свяжемся, ваша заявка № ${data.id}`);
            });
        calcForm.elements[8].disabled = true;
        calcResultSquare.textContent = calcResultLength.textContent = '0';
        modal.close();
        document.body.style.overflow = '';
    })
