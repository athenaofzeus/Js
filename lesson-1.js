// Task 1
// Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.

var Tc = parseInt(prompt('Введите градусы по цельсию'));

for (let i = 0; !Tc, i < 2; i++) {
    var Tc = parseInt(prompt('Введите градусы по цельсию'));
}
if (Tc) {
    var Tf = (9 / 5) * Tc + 32;
    alert(`${Tc} по Фаренгейту: ${Tf}`);
}

// Task 2
// Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).

let admin
let name

name = 'Василий'
admin = name

alert(admin)

//Task 3
//Чему будет равно JS-выражение 1000 + "108"
alert(1000 + "108")
//="1000108"