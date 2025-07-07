class NewArray<T> {
  constructor(private elements: T[]) {}

  get length() {
    let count = 0;
    for (const index of this.elements) {
      count++;
    }
    return count;
  }

  /**
   * Appends new elements to the end of an array, and returns the new length of the array.
    @param items New elements to add to the array.
    @returns length of the array
   */
  push(...values: T[]): number {
    for (const value of values) {
      this.elements[this.length] = value;
    }
    return this.length;
  }

  /**
   * Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
   */
  pop(): T | undefined {
    if (!this.length) return undefined;

    const removedElement = this.elements[this.length - 1];
    const newElements = [];

    for (var i = 0; i < this.length - 1; i++) {
      newElements[i] = this.elements[i];
    }
    this.elements = newElements;
    return removedElement;
  }

  /**
   * @param searchVal The value to locate in the array.
   * @param startFrom The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   * @returns
   */
  indexOf(searchVal: T, startFrom: number = 0) {
    for (var i = startFrom; i < this.length; i++) {
      if (this.elements[i] === searchVal) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   */
  includes(searchValue: T): Boolean {
    for (var i = 0; i < this.length; i++) {
      if (this.elements[i] === searchValue) return true;
    }
    return false;
  }

  /** Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified. */
  shift() {
    if (!this.length) return undefined;
    const firstElement = this.elements[0];
    const newArray = [];

    for (var i = 1; i < this.length; i++) {
      newArray[i - 1] = this.elements[i];
    }
    this.elements = newArray;

    return firstElement;
  }

  /**
   * Inserts new elements at the start of an array, and returns the new length of the array.
   * @param values Elements to insert at the start of the array.
   */
  unshift(...values: T[]) {
    const newElements = values;

    for (const value of this.elements) {
      newElements[newElements.length] = value;
    }
    this.elements = newElements;
    return this.length;
  }
}

const arr = ['God', 'jod', 'bgmi', 'hello'];

const data = new NewArray(arr);
console.log('## length', data.length);
console.log('## indexOf', data.indexOf('God', 1));
console.log('## includes', data.includes('God'));
console.log('## pop', data.push());
console.log('## push', data.push('oghiougo', 'iyf7iutoih'));
console.log('## unshift', data.unshift('hellijso', 'osnoie'));
console.log('## unshift', data.shift());
