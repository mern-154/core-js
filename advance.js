// Array

// let a = ["Nandu", 25, 15.68, "address"];

// // console.log(a[1]);
// // console.log(a.length);
// console.log(a[a.length - 1]);

// let arr = [78, 20, 42, 65, 32, 96];

// for (let a in arr) {
// 	console.log(a);
// }

// for (let index = 0; index < arr.length; index++) {
// 	const element = arr[index];
// 	console.log(element);
// }

// Arrow function

// const add = (x = 5, y = 2) => {
// 	console.log(`Sum of ${x} + ${y} = ${x + y}`);
// };

// function sub(x, y = 2) {
// 	console.log(`Sum of ${x} - ${y} = ${x - y}`);
// }

// function mult(x, y = 2) {
// 	console.log(`Sum of ${x} * ${y} = ${x * y}`);
// }

// function div(x, y = 2) {
// 	console.log(`Sum of ${x} / ${y} = ${x / y}`);
// }

// const fun1 = (x, y, ...args) => {
// 	// abc(x, y);
// 	// xyz(x, y);

// 	for (let a of args) {
// 		if (typeof a === "function") a(x, y);
// 	}
// };

// fun1(15, 26, (x, y) => {
// 	console.log(`Sum of ${x} + ${y} = ${x + y}`);
// });

// fun1(6, 3, add);

// fun1(6, 3, sub, add, mult, div, 45);

// Rest / Spread ...

// console.log(2 === "2", typeof 2, typeof "2");

// let arr = [78, 20, 42, 65, 32, 96];

// const printData = (element, index) => {
// 	console.log(element, index);
// };

// arr.map(printData);

// const result = arr.filter((e) => e < 50);

// console.log(result);

// let arr = [5, 2, 4, 8, 3];
// [10,4,8,16,6]

// const res = arr.map((e) => {
// 	return e * 2;
// });

// const res1 = arr.filter((e) => {
// 	return e === 6;
// });

// const res2 = arr.reduce((prev, curr, i, arr) => {
// 	console.log(i, arr, prev, curr);
// 	return prev + curr;
// });

// console.log(res);
// console.log(res1);
// console.log(res2);
