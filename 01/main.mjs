import { testInput, realInput } from "./input.mjs";

// split by new line
let input1 = realInput.split("\n");

// split by alphanumeric
input1 = input1.map((line) =>
	line
		.replace(/\D/g, ".")
		.split("")
		.filter((char) => char !== ".")
);

const puzzle1 = () => {
	let sum = 0;
	for (let i = 0; i < input1.length; i++) {
		const row = input1[i];
		sum += parseInt(row[0] + row[row.length - 1]);
	}
	return sum;
};

console.log(puzzle1());

let input2 = realInput
	.replaceAll("one", "one1one")
	.replaceAll("two", "two2two")
	.replaceAll("three", "three3three")
	.replaceAll("four", "four4four")
	.replaceAll("five", "five5five")
	.replaceAll("six", "six6six")
	.replaceAll("seven", "seven7seven")
	.replaceAll("eight", "eight8eight")
	.replaceAll("nine", "nine9nine");
input2 = input2.split("\n");
input2 = input2.map((line) =>
	line

		.replace(/\D/g, ".")
		.split("")
		.filter((char) => char !== ".")
);

const puzzle2 = () => {
	let sum = 0;
	for (let i = 0; i < input2.length; i++) {
		const row = input2[i];
		sum += parseInt(row[0] + row[row.length - 1]);
	}
	return sum;
};

console.log(puzzle2());
