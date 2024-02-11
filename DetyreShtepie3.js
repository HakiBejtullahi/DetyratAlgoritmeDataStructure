const generateRandomNumbers = (lengthOfList, rangeOfNumbers) => {
  const unorderedNumArray = [];
  for (let i = 0; i < lengthOfList; i++) {
    unorderedNumArray.push(Math.floor(Math.random() * rangeOfNumbers));
  }
  return unorderedNumArray;
};

//===================
//    BUBBLE SORT
//===================

// Runtime Complexity : O(n^2)

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tempNum = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempNum;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

const unorderedList1 = generateRandomNumbers(30, 30);
const sortedList = bubbleSort(unorderedList1);

console.log('bubble sort');
console.log(sortedList);
console.log('end of bubble sort');

//===============
// Selection Sort
//===============

// Runtime Complexity: O(n^2)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    let tempNum = arr[i];
    arr[i] = arr[min];
    arr[min] = tempNum;
  }
  return arr;
};
const unorderedList2 = generateRandomNumbers(30, 60);
const sortedList2 = selectionSort(unorderedList2);
console.log('selection sort');
console.log(sortedList2);
console.log('end of selection sort');

//===============
// Insertion Sort
//===============

// Runtime Complexity: O(n^2)

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let tempNumber = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > tempNumber) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = tempNumber;
  }
  // console.log(arr);
  return arr;
};

const unorderedList3 = generateRandomNumbers(30, 30);
const sortedList3 = insertionSort(unorderedList3);

console.log('insertion sort');
console.log(sortedList3);
console.log('end of insertion sort');

// ==============
// Merge Sort
// ==============

//Runtime Complexity : O(n * log(n))

const mergeSort = (arr) => {
  const length = arr.length;

  if (length <= 1) return arr; //base case

  const middle = Math.floor(length / 2);

  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);
  return merge(sortedLeft, sortedRight);
};

const merge = (leftArr, rightArr) => {
  let result = [];
  let leftSide = 0;
  let rightSide = 0;
  while (leftSide < leftArr.length && rightSide < rightArr.length) {
    if (leftArr[leftSide] < rightArr[rightSide]) {
      result.push(leftArr[leftSide]);
      leftSide++;
    } else {
      result.push(rightArr[rightSide]);
      rightSide++;
    }
  }
  return result.concat(leftArr.slice(leftSide), rightArr.slice(rightSide));
};

const unorderedList4 = generateRandomNumbers(30, 30);
const sortedList4 = mergeSort(unorderedList4);
console.log('merge sort');
console.log(sortedList4);
console.log('end of merge sort');
// ===========
//Quick Sort
// ===========

//Runtime Complexity : O(n log(n))

const quickSort = (arr) => {
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  let tempNum;

  let i = -1;
  if (arr.length <= 1) {
    return arr;
  }
  const leftSide = [];
  const rightSide = [];

  for (let j = 0; j < arr.length; j++) {
    if (j === pivotIndex) {
      continue;
    }
    if (arr[j] < pivot) {
      leftSide.push(arr[j]);
    } else {
      rightSide.push(arr[j]);
    }
  }
  i++;
  tempNum = arr[i];
  arr[i] = arr[arr.length - 1];
  arr[arr.length - 1] = tempNum;

  return [...quickSort(leftSide), arr[i], ...quickSort(rightSide)];
};

const unorderedList5 = generateRandomNumbers(30, 30);
const sortedList5 = quickSort(unorderedList5);
console.log('quick sort');
console.log(sortedList5);
console.log('end of quick sort');
