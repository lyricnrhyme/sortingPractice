function bubbleSort(arr) {
    if (arr.length < 2) {
      console.log(arr);
      return arr;
    }
    
    var countArr1 = arr.length-1;
    var swapArr1 = 0;
    for (var i=0; i<countArr1; i++) {
        for (var j=0; j<countArr1; j++) {
            if (arr[j] > arr[j+1]) {
                debugger;
                swapArr1 = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = swapArr1;
            }
        }
    }
}    
  
  bubbleSort([9,2,4,2,1,5,2,4,2,5,6,4,3,7,10,1,8])