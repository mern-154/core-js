// class ABC {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 		console.log("constructor", x, y);
// 	}

// 	fun1(z) {
// 		console.log("Fun1 called!", this.x, this.y, z);
// 		return "Hii";
// 	}
// }

// const obj = new ABC(2, 3);

// console.log(obj.fun1(5));

class Parent {
	constructor(x) {
		this.a = x;
	}

	getValue() {
		return this.a;
	}
}

class Child extends Parent {
	constructor(x, y) {
		super(x);
		this.b = y;
	}

	sum() {
		return `Sum = ${this.getValue() + this.b}`;
	}
}

const obj = new Child(2, 3);

console.log(obj.sum());
