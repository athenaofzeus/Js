'use strict'
const root = document.querySelector('.root');

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
        card.className = 'product';
        card.textContent = `${dict.name}, ${dict.cost} рублей`;
        root.append(card)
    }
}
addCards(prdPrc);

let bask;
function createBask() {
    bask = document.createElement('div');
    bask.textContent = `В корзине: 0 товаров на сумму 0 рублей`;
    document.body.append(bask);
}
createBask();

const cards = document.querySelectorAll('.product');
let numbPrd = 0;
let totalPrc = 0;
function onClick(prdPrc) {
    numbPrd++;
    totalPrc = totalPrc + parseInt(prdPrc.currentTarget.innerHTML.match(/\d+/)[0])
    console.log(totalPrc)
    bask.textContent = `В корзине: ${numbPrd} товаров на сумму ${totalPrc} рублей`;
    document.body.append(bask)
}

for (let card of cards) {
    card.addEventListener('click', onClick);
}