//  №1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 0;
let arr = [];
function prime() {
    while (i <= 100) {
        if (i < 2) {
            i++;
            continue;
        } else if (i == 2) {
            console.log(i);
            i++;
        } else {
            for (let n = 2; n < i; n++) {
                if (i % n == 0) {
                    arr.push(i);
                }
            }
            if (!arr.includes(i)) {
                console.log(i);
            }
            i++;
        }
    }
}
prime();


// №2. написать функцию - countBasketPrice - которая считает стоимость корзины
let mas = [80, 500, 1200, 100];
function countBasketPrice(arr) {
    let total = 0;
    for (let item of arr) {
        total = total + item;
    }
    return total;
}
/* countBasketPrice(mas) */

//или так:
function sum(a, b) {
    return a + b;
}
console.log(mas.reduce(sum));


//№3 Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:for(...){// здесь пусто}
for (let i = 0; i <= 9; i++) console.log(i);


//№4 Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
for (let n = 1; n <= 20; n++) console.log('x'.repeat(n));