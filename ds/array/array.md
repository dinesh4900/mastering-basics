1. indexOf()
   Finds the first index at which a given element can be found in the array.
   Syntax: indexOf(searchElement, fromIndex)
   searchElement: The value you want to search for in the array.
   fromIndex (Optional): The index to start the search from. If omitted, the search starts from index 0. If negative, it is treated as an offset from the end of the array.
   Returns: The first index of the element, or -1 if it is not found.

2. lastIndexOf()
   Finds the last index at which a given element can be found in the array. The search is performed backwards.
   Syntax: lastIndexOf(searchElement, fromIndex)
   searchElement: The value you want to search for in the array.
   fromIndex (Optional): The index to start the backward search from. If omitted, the search starts from the last element.
   Returns: The last index of the element, or -1 if it is not found.

3. includes()
   Determines whether an array includes a certain value among its entries.
   Syntax: includes(searchElement, fromIndex)
   searchElement: The value you want to search for.
   fromIndex (Optional): The index to start the search from. Defaults to 0.
   Returns: true if the element is found, otherwise false.

4. find()
   Finds the first element in the array that satisfies a provided testing function.
   Syntax: find(callbackFn, thisArg)
   callbackFn: A function to execute for each element in the array. It receives three arguments:
   element: The current element being processed.
   index (Optional): The index of the current element.
   array (Optional): The array find was called upon.
   thisArg (Optional): A value to use as this when executing the callback function.
   Returns: The value of the first element that passes the test. If no values pass the test, it returns undefined.

5. findIndex()
   Finds the index of the first element in the array that satisfies a provided testing function.
   Syntax: findIndex(callbackFn, thisArg)
   callbackFn: A function to execute for each element in the array. It receives the same arguments as the find callback (element, index, array).
   thisArg (Optional): A value to use as this when executing the callback function.
   Returns: The index of the first element that passes the test. If no values pass the test, it returns -1.
