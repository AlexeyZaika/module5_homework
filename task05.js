/*
Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива.
*/
let arr = [1, 2, 23, 43, 54];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  let arrItem = arr[i];
  console.log(arrItem);
}