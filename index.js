// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Merge two sorted arrays into one</h1>`;


// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mergeArrays = (arr1, arr2) => {
  let mergedArr = [...arr1, ...arr2]
  return mergedArr.filter((num, idx) => mergedArr.indexOf(num) === idx).sort((a,b) => a-b)
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))
console.log(mergeArrays([1,1,2,3,4,5,10], [3,5,6,7,7,8,8,9]))
