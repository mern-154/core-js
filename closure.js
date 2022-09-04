function parent() {
	let a = 5;

	function child() {
		let b = 10;
		return `Sum of ${a} & ${b} is ${a + b}`;
	}

	return child;
}

const x = parent();

// console.log(x());

// console.log(5 ** 2);
