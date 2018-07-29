function insertionSort(arr) {
    newArr = [];
    index = 0;
  
    if (newArr.length === 0) {
      newArr.push(arr.shift());
    }
    while (arr.length > 0) {
      index = -1;
      for (let i=0; i<newArr.length; i++) {
        if (arr[0] < newArr[i]) {
          index = i;
          break;
        }
      }
      if (index < 0) {
        newArr.push(arr.shift());
        console.log("newArr change", newArr);
      } else {
        newArr.splice(index, 0, arr.shift())
        console.log("newArr change", newArr);
      }
    }
    console.log("result",newArr)
  }
  
  insertionSort([3,2,5,4,6,1])