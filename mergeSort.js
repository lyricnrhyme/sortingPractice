function mergeSort(arr) {
    let length = arr.length;
    if (length < 2) {
      return arr;
    }
  
    let mid = Math.floor(length/2);
    let leftArr = arr.slice(0,mid);
    console.log("left", leftArr)
    let rightArr = arr.slice(mid);
    console.log("right", rightArr);
  
    return merge(mergeSort(leftArr), mergeSort(rightArr))
  }
  
  function merge(left, right) {
      results = [];
      l = 0;
      r = 0;
      while(l < left.length && r < right.length) {
        if (left[0] < right[0]) {
          results.push(left.shift());
        } else {
          results.push(right.shift());
        }
      }
      console.log("results", results);
      return results.concat(left.slice()).concat(right.slice())
    }
  
  
  let answer = [3,2,5,4,6,1]
