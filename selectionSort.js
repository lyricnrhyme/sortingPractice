function selectSort(arr) {
    let lowest = 0;
    let index = 0
    
    for (let i=0; i<arr.length; i++) {
      lowest = arr[i];
      index = i
      for (let j=i; j<arr.length; j++) {
        if (arr[j] < lowest) {
          lowest = arr[j];
          index = j;
        }
      }
      // console.log("low",arr.indexOf(lowest))
      arr.splice(index,1);
      arr.splice(i,0,lowest);
    }
    console.log(arr);
    return arr;
  }
  
  selectSort([3,2,5,4,6,1])