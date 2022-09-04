const sum = (...rest) => {
	console.log(rest);
	return rest.reduce((x, y) => x + y);
};

const div = (x, y) => {
	return x / y;
};

module.exports = { sum, div };
