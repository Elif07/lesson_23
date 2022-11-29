//

// // домашка № 1

// варіант 1
// console.log('35' + - "22"); //35-22
// поверне 13 - false

// варіант 2
// console.log('35'* "22"); //770
//поверне 770 - true

// варіант 3
// console.log('558' > 22++); //помилка error
//поверне true

// варіант 5
// console.log(!false && 11 || 18 && !''); // 11
//поверне 18 - false

// варіант 4
// let userCounter = 0;
// let newUsers = userCounter++;
// console.log(newUsers); //0

// варіант 6
// let name = 0;
// console.log(name ?? "без імені"); // 0
/*===============================================*/
// домашка № 2


//варіант 1
// if (1 === "1") {
//    console.log('Істина!');
// } else {
//    console.log('Брехня!');
// }
// Брехня!
//варіант 2
// if (5 == "5") {
//    console.log('Істина!');
// } else {
//    console.log('Брехня!');
// }
// Істина!
//варіант 3
let message = (92 >'11' && 58 < 100) ? `Істина!` : `Брехня!`;
console.log(message);
// Істина!
//варіант 4
// if (0) {
//    console.log('Брехня!');
// } else if (' ') {
//    console.log('Істина!');
// }
// код непрацює - нуль (0) та пустий рядок ('') приводить до false

/*==============================================*/
// домашка № 3
//варіант 1

//  цикл while

// let num = 1;
// while (num < 6) {
//    console.log(num);
//    num++;
// }
//  цикл for
// for (let num = 1; num < 6; num++) {
//    console.log(num);
// }
//варіант 2
// let num = 8;
// while (num) {
//    console.log(num);
//    num--
// }
// останній рузультат буде 1
//варіант 3
// let num = 0;
// while (num < 3) {
//    console.log(`Число: ${num}`);
//    num++
// }
//варіант 4
// firstfor:for (let num = 0; num < 2; num++) {
//    for (let size = 0; size < 2; size++) {
//       if (size == 1) {
//          break firstfor;
//       }
//       console.log(size);
//    }
// }
/*===========================================*/
//домашка 4
//задача 1
// let numOne = Math.round(1.005 * 100) / 100; // 1
// console.log(numOne);

// метод toFixed
// let numOne = 1.005; //1.0
// console.log(numOne.toFixed(1));

// Number.EPSILON
// let sourseNum = 1.005 + Number.EPSILON;
// let numOne = Math.round(sourseNum * 100) / 100; // 1.01
// console.log(numOne);

//задача 2
//перетворити рядок у число
// let value = "135.58px"
// let value = parseFloat("135.58px");
// console.log(value);
// console.log(typeof value);

//задача 3

// let value = 58 + "Фрилансер";
// if (value == NaN);
// console.log(Number(value));
// console.log(isNaN(value));

//задача 4
// знайти максимальне число із 10, 58, 39, -150, 0

// console.log(Math.max(10, 58, 39, -150, 0)); //58
//задача 5
// округлити число 58.858 до 58
// console.log(Math.floor(58.858)); //58
/*===============================================================*/
//домашка 5

//задача 1
// перевірити на вірність - "Привіт! Я фрілансер"

// let fls = "фрілансер";
// let text = 'Привіт! Я ${fls}';
// console.log(text);
//  let text = 'Привіт! Я ${fls}'- не вірні лапки , потрібно зворотні
//задача 2
//вивести букву "н" із рядка
// let text = "фрілансер";
// console.log(text[5]);

//задача 3
//очікуваний результат "579"
// let text = 123 + "456";
// console.log(text); //123456

//задача 4
// перевести рядок у верхній регістр
// let text = 'фрілансер';
// console.log(text.toUpperCase());
 //задача 5
// вивести підрядок "лан"
// let text = 'фрілансер';
// console.log(text.slice(3, 6));
// //задача 6
// true або false
// let text = 'фрілансер';
// console.log(text.includes('лан', 4)); // false
