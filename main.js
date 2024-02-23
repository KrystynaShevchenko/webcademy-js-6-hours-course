/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

// Вывод в консоль

// console.log(5555);
// console.log("Hello from JS!");

// =================== 2. Переменные ===================

// let userName = "Mark";
// console.log(userName);

// const userName = "kristina";
// console.log(userName);

/* =================== 2.2 Типы данных =================== */

// const someName = "Nur";
// console.log(typeof someName); //string

// const number = 3515;

// console.log(typeof number); //number

// const isThisNormal = true;
// console.log(typeof isThisNormal); //boolean

// =================== 3. Операторы сравнения и условия ===================

// console.log(10 > 5); //true
// console.log(20 > 80); //false
//=====================================
// let result = 10 == 5;
// console.log(result); // false
//=====================================
// console.log("5" == 5); //true
// console.log("5" === 5); //false
//=====================================
// const time = 12;

// if (time < 12) {
//   console.log("Good morning");
// } else {
//   console.log("Good afternoon");
// }
//=====================================
// const time = 20;

// if (time < 12) {
//   console.log("Good morning");
// } else if (time >= 12 && time < 18) {
//   console.log("Good afternoon");
// } else {
//   console.log("Good evening");
// }

// ======== 4. Тернарный оператор =========

// if (10 < 20) {
//   console.log("This is true");
// } else {
//   console.log("This is false");
// }

// 10 < 20 ? console.log("this is true") : console.log("this is false");
//=====================================
// let greeting;
// let time = 16;

// if (time < 12) {
//   greeting = "Morning";
// } else {
//   greeting = "Day";
// }

// console.log(greeting);

// let time = 10;

// let greeting = time < 12 ? "Morning" : "Day";

// console.log(greeting);
//=====================================

// ======== 4. Конкатенация строк и шаблонные строки =========

// let greeting = "Hi, Mark!";
// let yourDeal = " How are you?";

// let sayHi = greeting + yourDeal;

// console.log(sayHi);
//=====================================
// const userName = "Mark";
// console.log("Hi, " + userName + "! How are you?");

// const userName = "Mark";
// console.log(`Hi, ${userName}! How are you?`);
//=====================================

// =================== 5. Функции ===================

// console.log("Hi, my dear friend!");

// function sayHi() {
//   console.log("Hello my dear!");
// }

// sayHi();
//=====================================

// =================== 5.1 Параметры и аргументы для функции ===================

// const userName = "Mark";
// console.log(`Hello, ${userName}! How are you?`);

// function sayHi(name) {
//   console.log(`Hi, ${name}! How are you?`);
// }

// sayHi("Bob");
// sayHi("Miki");
// sayHi("Svetlana");
//=====================================

// =================== return внутри функции ===================

// function summ(a, b) {
//   const result = a + b;
//   return result;
// }

// console.log(summ(5, 3));//8
//=====================================

// =================== 5.3 Функция как аргумент ===================

// function summ(a, b) {
//   return a + b;
// }

// const result = summ(summ(15, 15), summ(20, 20));
// console.log(result);
//=====================================
// function summ(a, b) {
//   return a + b;
// }

// function diff(a, b) {
//   return a - b;
// }

// function doSomething(func) {
//   let x = 10;
//   let y = 15;
//   let result = func(x, y);

//   console.log(result);
// }

// doSomething(summ);
// doSomething(diff);
//=====================================

// =================== 5.3 Самовызывающаяся функция ===================

// (function () {
//   console.log("Hi my dear!");
// })();

// (function sayBye() {
//   console.log("Bye my friend!");
// })();
//=====================================
// (function summ(a, b) {
//   console.log(a + b);
// })(10, 15);
//=====================================

// =================== 5.3 Стрелочные функции ===================

// function sayHi1(name) {
//   console.log(`Hi ${name}! Nice to see you!`);
// }

// sayHi1("Sohaib");
//=====================================

// const sayHi2 = (name) => {
//   console.log(`Hi ${name}! Nice to see you!`);
// };

// sayHi2("Kristina");
//=====================================

// const sayHi3 = (name) => console.log(`Hi ${name}! Nice to see you!`);

// sayHi3("Nika");
//=====================================

// =================== 6. Массивы ===================

// const autoBrand1 = "Bmw";
// const autoBrand2 = "Toyota";
// const autoBrand3 = "Audi";
// const autoBrand4 = "Mazda";

// const autoBrands = ["Bmw", "Toyota", "Audi", "Mazda"];

// console.log(autoBrands);
// console.log(autoBrands[3]);
// console.log(autoBrands.length);
//=====================================

// =================== 7. Методы массивов ===================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
//=====================================
