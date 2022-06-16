// [5,3,2,6,7,2,2];
//o/p--[5,3,6,7,2,2,2]

const duplicateLast = (arr) => {
  let duplicateArr = [];
  let distantArr = [];
  arr.forEach((element, index) => {
    if (arr.indexOf(element, (index + 1)) !== -1 || duplicateArr.includes(element)) {
      duplicateArr.push(element)
    } else {
      distantArr.push(element)
    }
  });
  return [...distantArr,...duplicateArr]
}

//let newArr = duplicateLast([5, 3, 7, 6, 7, 4, 3]);
let newArr = duplicateLast([5,3,2,6,7,2,2]);
console.log(newArr)