/*
Создайте произвольный массив Map. Получите его ключи и выведите в консоль 
все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/

let myMap = new Map();
myMap.set(1, 'first');
myMap.set(2, 'second');

for (let [key, value] of myMap) {
  console.log('Key - ' + key + ', Value - ' + value);
}
