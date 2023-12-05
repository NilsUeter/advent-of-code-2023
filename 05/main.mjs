import { testInput, realInput } from "./input.mjs";

let [seeds, ...input] = realInput.split("\n\n");

input = input.map((block) => {
	const [firstLine, ...rest] = block.split("\n");

	return rest.map((line) => {
		const [destination, source, range] = line.split(" ").map(Number);
		return { destination, source, range };
	});
});

const part1 = () => {
	const seeds1 = seeds.split(": ")[1].split(" ").map(Number);
	let lowestLocation = Infinity;
	for (const seed of seeds1) {
		let tempId = seed;
		for (const block of input) {
			for (const { source, destination, range } of block) {
				if (tempId >= source && tempId < source + range) {
					tempId += destination - source;
					break;
				}
			}
		}
		if (tempId < lowestLocation) {
			lowestLocation = tempId;
		}
	}
	return lowestLocation;
};

console.log(part1());

const part2 = () => {
	// reverse the process
	const seeds2 = seeds.split(": ")[1].split(" ").map(Number);
	for (let i = 0; i < Infinity; i++) {
		let tempId = i;
		for (const block of input.slice().reverse()) {
			for (const { source, destination, range } of block) {
				// reverse the process
				if (tempId >= destination && tempId < destination + range) {
					tempId += source - destination;
					break;
				}
			}
		}
		let seed = tempId;
		// check if seed is valid, seeds are always start | range, repeating
		for (let s = 0; s < seeds2.length; s = s + 2) {
			const start = seeds2[s];
			const range = seeds2[s + 1];
			if (seed >= start && seed <= start + range) {
				return i;
			}
		}
	}
};

console.log(part2());
