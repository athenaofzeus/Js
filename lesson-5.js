'use strict'
const root = document.querySelector('#root');

const prdPrc = [
    { cost: 100, name: 'пояс' },
    { cost: 200, name: 'кроссовки' },
    { cost: 300, name: 'кепка' },
    { cost: 400, name: 'джинсы' },
    { cost: 500, name: 'куртка' },
    { cost: 6, name: 'брелок' }
];

function addCards(arr) {
    for (let dict of arr) {
        const card = document.createElement('div');
        card.textContent = `${dict.name}, ${dict.cost} рублей`;
        root.append(card)
    }
}
addCards(prdPrc);

function total(arr) {
    const bask = document.createElement('div');
    let totalPrc = arr.reduce((sum, current) => sum + current.cost, 0);
    let numbPrd = arr.length;
    bask.textContent = `В корзине: ${numbPrd} товаров на сумму ${totalPrc} рублей`;
    document.body.append(bask)
}
total(prdPrc);

const divs = document.querySelectorAll('div > div');

divs.forEach(function (elem, indx) {
    if (indx % 2 == 0) {
        elem.style.background = 'black';
        elem.style.color = 'white'
        indx++;
    }
});