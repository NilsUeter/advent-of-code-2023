import { testInput, realInput } from "./input.mjs";

let input = realInput.split("\n").map((line) => line.split(""));

const part1 = () => {
	let sum = 0;
	const width = input[0].length;

	for (let y = 0; y < input.length; y++) {
		const row = input[y];
		let numberStart = -1;
		for (let x = 0; x < width; x++) {
			const element = row[x];
			const isNumber = !isNaN(parseInt(element));
			if (isNumber && numberStart === -1) {
				numberStart = x;
			}
			const isLastNumber = isNaN(parseInt(row[x + 1]));
			if (isNumber && isLastNumber) {
				const numberLength = x - numberStart + 1;
				const fullNumber = parseInt(
					row.slice(numberStart, numberStart + numberLength).join("")
				);
				const surroundings = [];
				for (let i = y - 1; i <= y + 1; i++) {
					for (let j = numberStart - 1; j <= numberStart + numberLength; j++) {
						if (input[i] && input[i][j]) {
							surroundings.push(input[i][j]);
						}
					}
				}
				const isPartNumber = surroundings.some(
					(element) => element !== "." && isNaN(parseInt(element))
				);
				if (isPartNumber) {
					sum += fullNumber;
				}
				numberStart = -1;
			}
		}
	}
	return sum;
};

console.log(part1());

const part2 = () => {
	let sum = 0;
	const width = input[0].length;

	for (let y = 0; y < input.length; y++) {
		const row = input[y];
		for (let x = 0; x < width; x++) {
			const element = row[x];
			const isGear = element === "*";
			if (isGear) {
				const surroundings = [];
				for (let i = y - 1; i <= y + 1; i++) {
					for (let j = x - 1; j <= x + 1; j++) {
						if (input[i] && input[i][j]) {
							const isNumber = !isNaN(parseInt(input[i][j]));
							if (isNumber) {
								let numberStart = j;
								while (!isNaN(parseInt(input[i][numberStart - 1]))) {
									numberStart--;
								}
								let numberEnd = j;

								while (!isNaN(parseInt(input[i][numberEnd + 1]))) {
									numberEnd++;
								}
								const numberLength = numberEnd - numberStart + 1;
								const fullNumber = parseInt(
									input[i]
										.slice(numberStart, numberStart + numberLength)
										.join("")
								);
								surroundings.push(fullNumber);

								j = numberEnd;
							}
						}
					}
				}
				if (surroundings.length == 2) {
					sum += surroundings.reduce((a, b) => a * b);
				}
			}
		}
	}
	return sum;
};

console.log(part2());
