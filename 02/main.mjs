import { testInput, realInput } from "./input.mjs";

let input = realInput.split("\n").map((line) => {
	let [, cubes] = line.split(": ");
	return cubes.split("; ").map((subgame) => {
		const object = {};
		subgame.split(", ").forEach((str) => {
			const [count, color] = str.split(" ");
			object[color] = parseInt(count);
		});
		return object;
	});
});

const limits = {
	red: 12,
	green: 13,
	blue: 14,
};

const part1 = () => {
	let sum = 0;
	for (let i = 0; i < input.length; i++) {
		const row = input[i];
		const allPossible = row.every((set) =>
			Object.keys(set).every((color) => set[color] <= limits[color])
		);
		if (allPossible) {
			sum += i + 1;
		}
	}
	return sum;
};

console.log(part1());

const part2 = () => {
	let power = 0;
	for (const row of input) {
		const minimumRed = Math.max(...row.map((set) => set.red || 0));
		const minimumGreen = Math.max(...row.map((set) => set.green || 0));
		const minimumBlue = Math.max(...row.map((set) => set.blue || 0));
		power += minimumRed * minimumGreen * minimumBlue;
	}
	return power;
};

console.log(part2());
