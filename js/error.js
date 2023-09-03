const submitBtn = document.querySelector('#submit');

const currentYear = new Date().getFullYear();

const forDay = document.querySelector('#forDay');
const forMonth = document.querySelector('#forMonth');
const forYear = document.querySelector('#forYear');

const dayError = forDay.querySelector('.descText');
const monthError = forMonth.querySelector('.descText');
const yearError = forYear.querySelector('.descText');

const yearOutput = document.querySelector('#yearOutput')
const monthOutput = document.querySelector('#monthOutput')
const dayOutput = document.querySelector('#dayOutput')

// ckecking the date validation
function isDate(y, m, d) {
    let date = new Date(y, --m, d);
    return date.getFullYear() === y && date.getMonth() === m && date.getDate() === d
}

// animate calculation
function outNum(num, elem) {
    let count = 0;
    let interval = setInterval(() => {
        count += 1;

        if (count === num) {
            clearInterval(interval);
        };

        elem.innerHTML = count;

    }, 50);
};

// calculation
function timeFromFirst(y, m, d) {

    let first = new Date(y, --m, d).getTime();
    let second = new Date().getTime();
    let diff = new Date(Math.abs(second - first));
    let years = diff.toISOString().slice(0, 4) - 1970;
    let months = diff.getMonth();
    let days = diff.getDate() - 1;

    outNum(years, yearOutput);
    outNum(months, monthOutput);
    outNum(days, dayOutput);

}

submitBtn.addEventListener('click', () => {
    // get all inputs
    const yearInput = forYear.querySelector('#year');
    const monthInput = forMonth.querySelector('#month');
    const dayInput = forDay.querySelector('#day');

    // if input has no info
    if (dayInput.value === '') {

        dayError.innerText = 'this field is required';
        forDay.querySelector('#day').style.cssText += `border: 1px solid var(--LigthRed);`;
        forDay.querySelector('#daytext').style.cssText += `color: var(--LigthRed);`;

    } else if (dayInput.value > 31) {

        dayError.innerText = 'must be a valid day';
        forDay.querySelector('#day').style.cssText += `border: 1px solid var(--LigthRed);`;
        forDay.querySelector('#daytext').style.cssText += `color: var(--LigthRed);`;

    }

    // if input has no info
    if (monthInput.value === '') {

        monthError.innerText = 'this field is required';
        forMonth.querySelector('#month').style.cssText += `border: 1px solid var(--LigthRed);`;
        forMonth.querySelector('#monthtext').style.cssText += `color: var(--LigthRed);`;

    } else if (monthInput.value > 12) {

        monthError.innerText = 'must be a valid month';
        forMonth.querySelector('#month').style.cssText += `border: 1px solid var(--LigthRed);`;
        forMonth.querySelector('#monthtext').style.cssText += `color: var(--LigthRed);`;

    }

    // if input has no info             
    if (yearInput.value === '') {

        yearError.innerText = 'this field is required';
        forYear.querySelector('#year').style.cssText += `border: 1px solid var(--LigthRed);`;
        forYear.querySelector('#yeartext').style.cssText += `color: var(--LigthRed);`;

    } else if (yearInput.value > currentYear) {

        yearError.innerText = 'must be in the past';
        forYear.querySelector('#year').style.cssText += `border: 1px solid var(--LigthRed);`;
        forYear.querySelector('#yeartext').style.cssText += `color: var(--LigthRed);`;

    }

    // if date is not valid
    else if (isDate(parseInt(yearInput.value), parseInt(monthInput.value), parseInt(dayInput.value)) === false) {

        dayError.innerText = 'must be a valid date';

        forDay.querySelector('#day').style.cssText += `border: 1px solid var(--LigthRed);`;
        forMonth.querySelector('#month').style.cssText += `border: 1px solid var(--LigthRed);`;
        forYear.querySelector('#year').style.cssText += `border: 1px solid var(--LigthRed);`;

        forDay.querySelector('#daytext').style.cssText += `color: var(--LigthRed);`;
        forMonth.querySelector('#monthtext').style.cssText += `color: var(--LigthRed);`;
        forYear.querySelector('#yeartext').style.cssText += `color: var(--LigthRed);`;
    }

    else {
        dayError.innerText = '';

        forDay.querySelector('#day').style.cssText -= `border: 1px solid var(--LigthRed);`;
        forMonth.querySelector('#month').style.cssText -= `border: 1px solid var(--LigthRed);`;
        forYear.querySelector('#year').style.cssText -= `border: 1px solid var(--LigthRed);`;

        forDay.querySelector('#daytext').style.cssText -= `color: var(--LigthRed);`;
        forMonth.querySelector('#monthtext').style.cssText -= `color: var(--LigthRed);`;
        forYear.querySelector('#yeartext').style.cssText -= `color: var(--LigthRed);`;

        // calculate the date
        timeFromFirst(parseInt(yearInput.value), parseInt(monthInput.value), parseInt(dayInput.value));
    }

    // reset input error styles on click
    dayInput.addEventListener('click', () => {
        dayError.innerText = '';
        forDay.querySelector('#day').style.cssText -= `border: 1px solid var(--LigthRed);`;
        forDay.querySelector('#daytext').style.cssText -= `color: var(--LigthRed);`;
    })

    monthInput.addEventListener('click', () => {
        monthError.innerText = '';
        forMonth.querySelector('#month').style.cssText -= `border: 1px solid var(--LigthRed);`;
        forMonth.querySelector('#monthtext').style.cssText -= `color: var(--LigthRed);`;
    })

    yearInput.addEventListener('click', () => {
        yearError.innerText = '';
        forYear.querySelector('#year').style.cssText -= `border: 1px solid var(--LigthRed);`;
        forYear.querySelector('#yeartext').style.cssText -= `color: var(--LigthRed);`;
    })
})