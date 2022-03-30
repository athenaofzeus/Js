/* 1) Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например:
для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект {}.
 */

function numToObj(number) {
    let dict = {};
    let spltNum = number.split('');
    if (number > 999) {
        console.log(`Число превышает 999`);
    } else {
        dict['единицы'] = spltNum[spltNum.length - 1];
        if (spltNum.length > 1) {
            dict['десятки'] = spltNum[spltNum.length - 2];
            if (spltNum.length > 2) {
                dict['сотни'] = spltNum[spltNum.length - 3];
            }
        }
    }
    return dict;
}
console.log(numToObj(String(0)));
console.log(numToObj(String(95)));
console.log(numToObj(String(731)));
console.log(numToObj(String(2022)));



/* 2) [100, 200, 300, 400, 500, 6]
становится вот таким массивом:
[{cost: 100, name: 'пояс' }, {cost: 200, name: 'кроссовки' }, { cost: 300, name: 'кепка' }, { cost: 400, name: 'джинсы' }, { cost: 500, name: 'куртка' }, { cost: 6, name: 'брелок' }]
функция должна подсчитывать сумму из такого массива

в двух вариантах:
первый способ - на ваш выбор
*второй способ - reduce (на мой выбор)*/

const costs = [100, 200, 300, 400, 500, 6];
const products = ['пояс', 'кроссовки', 'кепка', 'джинсы', 'куртка', 'брелок'];

function countTotal(arrayC, arrayP) {
    let prcPrdList = [];
    for (let i in arrayC) {
        prcPrdList[i] = { cost: arrayC[i], name: arrayP[i] };
    }
    return prcPrdList.reduce((sum, current) => sum + current.cost, 0)
}
console.log(countTotal(costs, products));
