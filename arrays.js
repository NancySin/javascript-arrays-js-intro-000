

 function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift();  // retrns removed element--> can't return array.shift()
    return array;
  }

  function removeElementFromBeginningOfArray(array) {
   return array.slice(1);
  }

  function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop(); // returns removed element, so can't return array.pop()
    return array;
  }

  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length-1);
  }
