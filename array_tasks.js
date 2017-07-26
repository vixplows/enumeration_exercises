var arrayTasks = {

	concat: function (arr1, arr2) {
		var concatArray = [];

		for (var item of arr1) {
			concatArray.push(item);
		}
		for (var item of arr2) {
			concatArray.push(item);
		}
 		return concatArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;		
	},

	square: function (arr) {
		var squaredArray = [];

		for (var item of arr) {
			var squaredItem = item * item;
			squaredArray.push(squaredItem);
		}
		return squaredArray;
	},

	sum: function (arr) {
		var sum = 0

		arr.forEach(function(item) {
			sum += item;
		});
		return sum;	
	},

	findDuplicates: function (arr) {
		var rejectArray = []
		var resultArray = []

		for (item of arr) {
			if (!resultArray.includes(item) && rejectArray.includes(item)) {
				resultArray.push(item);
			} else {
				rejectArray.push(item);
			}
	}
	return resultArray;
},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = arr.filter(function(value) {
			return value !== valueToRemove 
		})
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];

		for (item = 0; item < arr.length; item++) {
			if (arr[item] === itemToFind) {
				indexArray.push(item)
		}
	}
	return indexArray;
},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNums = arr.filter(function(value){
			return value % 2 === 0;
		})
		var squareEvenNums = this.square(evenNums);
		var resultArray = this.sum(squareEvenNums);
		return resultArray;
},

}

module.exports = arrayTasks