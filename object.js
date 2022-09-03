const user = {
	full_name: "John",
	email: "john@test.com",
	age: 25,
	contact: "68431654631",
	dob: new Date().toString(),
};

// console.log(user.dob);

// distructuring

// const { full_name, age, dob, email, ...rest } = user;

// console.log(full_name);
// console.log(full_name);
// console.log(full_name);
// console.log(full_name);
// console.log(full_name);

let arr = [5, 656, 56, 5, 62, 65, 26];

const [, x, y, ...rest] = arr;

console.log(x, y, rest);
