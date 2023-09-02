const submitBtn = document.querySelector('#submit');
// текущий год
const currentYear = new Date().getFullYear();

// собираем все label
const forDay = document.querySelector('#forDay');
const forMonth = document.querySelector('#forMonth');
const forYear = document.querySelector('#forYear');

// запишем поля для вывода ошибок
const dayError = forDay.querySelector('.descText');
const monthError = forMonth.querySelector('.descText');
const yearError = forYear.querySelector('.descText');

// проверка на валидность даты
function isDate(y, m, d) {
    let date = new Date(y, --m, d);
    return date.getFullYear() === y && date.getMonth() === m && date.getDate() === d
}

// что происходит при клике на кнопку рассчета
submitBtn.addEventListener('click', () => {
    // собираем все инпуты 
    const yearInput = forYear.querySelector('#year').value;
    const monthInput = forMonth.querySelector('#month').value;
    const dayInput = forDay.querySelector('#day').value;

    if (dayInput === '') {
        dayError.innerText = 'this field is required';
        forDay.querySelector('#day').style.cssText += `border: 1px solid var(--LigthRed);`;
        forDay.querySelector('#daytext').style.cssText += `color: var(--LigthRed);`;
    }
    if (monthInput === '') {
        monthError.innerText = 'this field is required';
        forMonth.querySelector('#month').style.cssText += `border: 1px solid var(--LigthRed);`;
        forMonth.querySelector('#monthtext').style.cssText += `color: var(--LigthRed);`;
    }
    if (yearInput === '') {
        yearError.innerText = 'this field is required';
        forYear.querySelector('#year').style.cssText += `border: 1px solid var(--LigthRed);`;
        forYear.querySelector('#yeartext').style.cssText += `color: var(--LigthRed);`;
    }
    else if ( !isDate(yearInput, monthInput, dayInput) ) {
        dayError.innerText = 'must be a valid date';

        forDay.querySelector('#day').style.cssText += `border: 1px solid var(--LigthRed);`;
        forMonth.querySelector('#month').style.cssText += `border: 1px solid var(--LigthRed);`;
        forYear.querySelector('#year').style.cssText += `border: 1px solid var(--LigthRed);`;

        forDay.querySelector('#daytext').style.cssText += `color: var(--LigthRed);`;
        forMonth.querySelector('#monthtext').style.cssText += `color: var(--LigthRed);`;
        forYear.querySelector('#yeartext').style.cssText += `color: var(--LigthRed);`;
    }
})

// must be a valid day
// must be a valid month
// must be in the past

// must be a valid date (whole)

// this field is required
