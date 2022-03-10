// №1 Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
//префиксальная форма '++а' увеличивает а(=1) на 1 и присваивает 'с' значение 2.

d = b++; alert(d);           // 1
//постфиксальная форма 'b++' увеличивет 'b' на 1, но возвращает значение до увеличения.

c = (2 + ++a); alert(c);      // 5
//выше 'а' присвоили знаение 2, здесь - +1 (a=3),  2 + 3 = 5.

d = (2 + b++); alert(d);      // 4
//выше 'b' присвоили значечние 2, здесь +1 (но имеет старое значение b = 2): 2 + 2 = 4

alert(a);                    // 3
//в 10 строке 'а' стало = 3 и больше значений не присваивалось.

alert(b);                    // 3
// в 13 строке 'b' присвоили значение 3 и больше значений не присваивалось.

// №2 Чему будет равен x? 
var a = 2;
var x = 1 + (a *= 2);
// x = 5

/* №3 Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
-если a и b положительные, вывести их разность;
-если а и b отрицательные, вывести их произведение;
-если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом. */

function task3() {
    let a;
    let b;
    a = Math.round(Math.random() * (10 - -20) + -20);
    b = Math.round(Math.random() * (20 - -5) + -5);
    //console.log(a, b)

    if (a >= 0 && b >= 0) {
        return a - b;
    }
    else if (a < 0 && b < 0) {
        return a * b;
    }
    return a + b;
}
task3()

// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
function task4() {
    let a = Math.floor(Math.random() * (16 - 0) + 0); //16, тк Math.random E [0, 1)
    console.log(a);

    switch (a) {
        case 15:
            console.log(a);
            break;

        case 14:
            to15(a)
            break;

        case 13:
            to15(a)
            break;

        case 12:
            to15(a)
            break;
        case 15:
            to15(a);
            break;

        case 14:
            to15(a);
            break;

        case 11:
            to15(a);
            break;

        case 10:
            to15(a);
            break;
        case 9:
            to15(a);
            break;

        case 8:
            to15(a);
            break;

        case 7:
            to15(a);
            break;

        case 6:
            to15(a);
            break;

        case 5:
            to15(a);
            break;

        case 4:
            to15(a);
            break;

        case 3:
            to15(a);
            break;

        case 2:
            to15(a);
            break;

        case 1:
            to15(a);
            break;

        case 0:
            to15(a);
            break;
    }
}

function to15(num) {
    for (let i = 1; num <= 15; num = num + i) {
        console.log(num);
    }
}
task4();

// №5 Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function task5(x, y) {
    let arrXY = [];
    arrXY.push(x + y, y - x, x * y, y / x);
    return arrXY;
}

task5(parseInt(prompt()), parseInt(prompt()));

//№6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).


function mathOperation(arg1, arg2, operation) {
    let res;
    console.log(arg1, arg2, operation)
    switch (operation) {
        case 'sum':
            res = arg1 + arg2;
            return res;
        case 'difference':
            res = arg2 - arg1;
            return res;
        case 'product':
            res = arg1 * arg2;
            return res;
        default:
            res = arg2 / arg1;
            return res;
    }
}
function callMathPrompt() {
    const firstArg = parseInt(prompt());
    const secondArg = parseInt(prompt());
    const operation = prompt('Choose one of these functionctions: sum, difference, product or division').toLowerCase();
    return mathOperation(firstArg, secondArg, operation);
}


//№7 * Сравнить null и 0. Объяснить результат.
console.log(null == 0) //false - нестрогое равенство не преобразует null в числовой тип >> null == null - true и только так.
console.log(null == 0) //false - строгое равенство сравнивает и значение, и тип (значит, не преобразует null в число, а сравнивает, как есть).

//№8 * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
function power(val, pow) {
    if (val == 1 || pow == 0) {
        return 1;
    } else {
        let result = val * power(val, Math.abs(pow) - 1);
        if (pow > 0) {
            return result;
        } else {
            return 1 / result;
        }
    }
}
power(parseInt(prompt('Number')), parseInt(prompt('Power')));