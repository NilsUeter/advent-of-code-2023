import { testInput, realInput } from "./input.mjs";

let input = realInput.split("\n").map((line) => {
	const [, withoutGame] = line.split(": ");
	const [left, right] = withoutGame.split(" | ").map((e) =>
		e
			.replaceAll("  ", " ")
			.split(" ")
			.map((e) => parseInt(e, 10))
	);

	return {
		winningNumbers: new Set(left),
		yourNumbers: new Set(right),
	};
});

const part1 = () => {
	let sum = 0;
	for (const { winningNumbers, yourNumbers } of input) {
		const intersection = [...winningNumbers].filter((x) => yourNumbers.has(x));
		if (intersection.length === 1) {
			sum += 1;
		} else if (intersection.length > 1) {
			sum += Math.pow(2, intersection.length - 1);
		}
	}
	return sum;
};

console.log(part1());

const part2 = () => {
	let copies = new Map();
	let i = 0;
	for (const { winningNumbers, yourNumbers } of input) {
		const intersection = [...winningNumbers].filter((x) => yourNumbers.has(x));
		const nextXElements = intersection.length;
		for (let c = 1; c <= nextXElements; c++) {
			copies.set(i + c, (copies.get(i + c) || 1) + (copies.get(i) || 1));
		}

		i++;
	}
	return (
		Array.from(copies.values()).reduce((a, b) => a + b, 0) +
		input.length -
		copies.size
	);
};

console.log(part2());
