const submitBtn = document.querySelector('#submit');
// current year
const currentYear = new Date().getFullYear();

function isDate(y, m, d) {

    let date = new Date(y, --m, d);

    return date.getFullYear() === y && date.getMonth() === m && date.getDate() === d
}

submitBtn.addEventListener('click', () => {

    const day = document.querySelector('#forDay');
    const month = document.querySelector('#forMonth');
    const year = document.querySelector('#forYear');

    const dayInput = parseInt(day.querySelector('#day').value);
    const monthInput = parseInt(month.querySelector('#month').value);
    const yearInput = parseInt(year.querySelector('#year').value);

    console.log(dayInput, monthInput, yearInput)

    if (dayInput == '') {
        day.querySelector('#day').style.cssText += `border: 1px solid var(--LigthRed);`;
        day.querySelector('#daytext').style.cssText += `color: var(--LigthRed);`;
        day.querySelector('.descText').style.cssText += `display: block;`
    }

    if (monthInput == '') {
        month.querySelector('#month').style.cssText += `border: 1px solid var(--LigthRed);`;
        month.querySelector('#monthtext').style.cssText += `color: var(--LigthRed);`;
        month.querySelector('.descText').style.cssText += `display: block;`
    }

    if (yearInput == '') {
        year.querySelector('#year').style.cssText += `border: 1px solid var(--LigthRed);`;
        year.querySelector('#yeartext').style.cssText += `color: var(--LigthRed);`;
        year.querySelector('.descText').style.cssText += `display: block;`
    }

    // if (!isDate(yearInput, monthInput, dayInput) || yearInput > currentYear) {
    //     document.querySelector('#day').style.cssText += `border: 1px solid var(--LigthRed);`;
    //     document.querySelector('#daytext').style.cssText += `color: var(--LigthRed);`;
    //     document.querySelector('#month').style.cssText += `border: 1px solid var(--LigthRed);`;
    //     document.querySelector('#monthtext').style.cssText += `color: var(--LigthRed);`;
    //     document.querySelector('#year').style.cssText += `border: 1px solid var(--LigthRed);`;
    //     document.querySelector('#yeartext').style.cssText += `color: var(--LigthRed);`;
    // }

})