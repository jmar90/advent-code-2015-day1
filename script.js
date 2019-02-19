// LOAD IN FS MODULE
const fs = require('fs');

// PUZZLE LOGIC
const puzzleInput = fs.readFileSync('./puzzleInput.txt').toString().split('');

const whatFloor = (arr) => {
	let floor = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === '('){
			++floor;
		} else {
			--floor;
		}
	}
	return floor;
}

const result = whatFloor(puzzleInput);
console.log(result);