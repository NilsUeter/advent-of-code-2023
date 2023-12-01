import { testInput, realInput } from "./input.mjs";

let input1 = realInput.split("\n").map((line) =>
	line
		.replace(/\D/g, ".") // replace all non-digits with a dot
		.split("")
		.filter((char) => char !== ".")
);

const part1 = () => {
	let sum = 0;
	// iterate over each row
	for (const row of input1) {
		sum += parseInt(row[0] + row[row.length - 1]);
	}
	return sum;
};

console.log(part1());

let input2 = realInput
	.replaceAll("one", "one1one")
	.replaceAll("two", "two2two")
	.replaceAll("three", "three3three")
	.replaceAll("four", "four4four")
	.replaceAll("five", "five5five")
	.replaceAll("six", "six6six")
	.replaceAll("seven", "seven7seven")
	.replaceAll("eight", "eight8eight")
	.replaceAll("nine", "nine9nine")
	.split("\n")
	.map((line) =>
		line
			.replace(/\D/g, ".") // replace all non-digits with a dot
			.split("")
			.filter((char) => char !== ".")
	);

const part2 = () => {
	let sum = 0;
	for (const row of input2) {
		sum += parseInt(row[0] + row[row.length - 1]);
	}
	return sum;
};

console.log(part2());
