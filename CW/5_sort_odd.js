function sortArray(array) {
  
  for (let i=0; i<array.length; i++) {
    if (array[i] % 2 !== 0) {
      let minVal = array[i]
      for (let j=i+1; j<array.length; j++) {
        
        if ((array[j] % 2 !== 0) && (array[j] < minVal)) {
          
          array[i] = array[j]
          array[j] = minVal
          minVal = array[i]
        }
      }
    }
  }
  return array
}