const numArray = [9, 5, 1, 7, 3, 4, 6, 8, 2];
const orderedNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

//===============
//Linear Search
//===============

//Not Sort Dependent
//runtime complexity : O(n)
//fast for small to medium data sets

const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return arr[i];
    } else {
      continue;
    }
  }
};

//Testing

const value = linearSearch(numArray, 2);
console.log(value);

//===============
//Binary Search
//===============

//Must be sorted
//Fast for Sorted Lists
//Runtime complexity: O(log(n))

const binarySearch = (array, letter) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middleIndex = start + (end - start) / 2;
    const value = array[middleIndex];
    if (value < letter) {
      start = middleIndex + 1;
    } else if (value > letter) {
      end = middleIndex - 1;
    } else {
      return `Letter found : ${
        array[middleIndex]
      } at index: ${middleIndex} from array: {${array.map((item) => item)}}`;
    }
  }
};

const data = binarySearch(letterArray, 'c');
console.log(data);

//===============
//Interpolation Search
//===============

//Must be sorted
//Fast for Sorted Lists
//Runtime Complexity: O(log(log(n))) average
//                    O(n) worst case

const interpolationSearch = (array, target) => {
  let high = array.length - 1;
  let low = 0;
  while (target >= array[low] && target <= array[high] && low <= high) {
    //Interpolation search formula
    probe =
      low + ((high - low) * (target - array[low])) / (array[high] - array[low]);
    if (array[probe] === target) {
      return probe;
    } else if (array[probe] < target) {
      low = probe + 1;
    } /*if (array[probe] > target)*/ else {
      high = probe - 1;
    }
  }
  return 'Not Found';
};

const data2 = interpolationSearch(orderedNumArray, 1);
console.log(
  `Index of 7 in array [${orderedNumArray.map((item) => item)}] :${data2}`
);
