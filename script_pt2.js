// LOAD IN FS MODULE
const fs = require('fs');

// PUZZLE LOGIC
const puzzleInput = fs.readFileSync('./puzzleInput.txt').toString().split('');

const whatFloor = (arr) => {
	let floor = 0;
	let character = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === '(' && floor !== -1){
			++floor;
		} else if (arr[i] === ')' && floor !== -1){
			--floor;
		} else {
			character = i;
			return character;
		}
	}
}

const result = whatFloor(puzzleInput); // Save index at which floor became equal to -1
console.log(result); // i = 1783