/*
Дана переменная Х, которая может принимать любое значение. Написать программу, 
которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях 
выводите сообщение: «Тип x не определён».
*/
let x = 2;
if (typeof x === 'number') {
  console.log('Тип х число');
} else if (typeof x === 'string') {
  console.log('Тип х строка');
} else if (typeof x === 'boolean') {
  console.log('Тип х логический');
} else {
  console.log('Тип х не определен');
}