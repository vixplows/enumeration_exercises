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

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
