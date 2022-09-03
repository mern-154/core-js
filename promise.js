// console.log("first log");

// console.log("Second log");

// for (let index = 1; index <= 10; index++) {
// 	setTimeout(() => {
// 		console.log(index);
// 	}, 1000);
// }

// console.log("3rd log");

// for (let index = 1; index <= 10; index++) {
// 	console.log(index);
// }

// JS Promise

// 1. Pending
// 2. Resolved
// 3. Rejected

const year = 2024;

let x = new Promise((resolved, reject) => {
	if (year % 4) {
		return reject("Not!");
	} else {
		return resolved("Leap year");
	}
});

// x.then((y) => {
// 	console.log(y);
// }).catch((err) => {
// 	console.log(err);
// });

// async function fun1() {
// 	return "Hello World!";
// }

// let x = fun1();

// x.then((y) => {
// 	console.log(y);
// }).catch((err) => {
// 	console.log(err);
// });

async function fun2() {
	let data;
	try {
		data = await x;
	} catch (err) {
		data = err;
	}

	return data;
}

let a = fun2();

// console.log(a);

a.then((y) => {
	console.log(y);
}).catch((err) => {
	console.log(err);
});
