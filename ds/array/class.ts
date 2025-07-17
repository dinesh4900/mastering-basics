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

  /**
   * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
   * @param searchElement  — The value to locate in the array.
   * @param startWith - The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, startWith: number = this.length - 1): number {
    if (!this.length) return -1;

    for (var i = startWith; i >= 0; i--) {
      if (this.elements[i] === searchElement) return i;
    }
    return -1;
  }

  /**
   * Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
   */
  reverse() {
    for (var i = 0; i < this.length / 2; i++) {
      const oppositeIndex = this.length - 1 - i;
      const temp = this.elements[i];

      this.elements[i] = this.elements[oppositeIndex];
      this.elements[oppositeIndex] = temp;
    }
    return this.elements;
  }

  /**
   * Adds all the elements of an array into a string, separated by the specified separator string.
   * @param seperator  A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
   */
  join(seperator: string = ',') {
    if (this.length === 0) return '';

    let result = '';
    for (var i = 0; i <= this.length - 1; i++) {
      result = result + this.elements[i];

      if (i < this.length - 1) {
        result = result + seperator;
      }
    }
    return result;
  }

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfunction A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array
   */
  forEach(callbackfunction: (value: T, index: number, array: T[]) => void) {
    for (var i = 0; i < this.length; i++) {
      callbackfunction(this.elements[i], i, this.elements);
    }
  }

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   */
  find(callbackfunction: (value: T, index: number, array: T[]) => boolean) {
    for (var i = 0; i < this.length; i++) {
      if (callbackfunction(this.elements[i], i, this.elements)) {
        return this.elements[i];
      }
    }
    return undefined;
  }

  /**
   * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   */
  findIndex(
    callbackfunction: (value: T, index: number, array: T[]) => boolean
  ): number {
    for (var i = 0; i < this.length; i++) {
      if (callbackfunction(this.elements[i], i, this.elements)) {
        return i;
      }
    }
    return -1;
  }

  some(
    callbackfunction: (value: T, index: number, array: T[]) => boolean
  ): boolean {
    for (var i = 0; i < this.length; i++) {
      if (callbackfunction(this.elements[i], i, this.elements)) {
        return true;
      }
    }
    return false;
  }

  every(
    callbackfunction: (value: T, index: number, array: T[]) => boolean
  ): boolean {
    for (var i = 0; i < this.length; i++) {
      if (!callbackfunction(this.elements[i], i, this.elements)) {
        return false;
      }
    }
    return true;
  }

  map(callbackfunction: (value: T, index: number, array: T[]) => any) {
    const newArray = [];
    for (var i = 0; i < this.length; i++) {
      const newValue = callbackfunction(this.elements[i], i, this.elements);
      newArray[i] = newValue;
    }
    return new NewArray(newArray);
  }

  filter(callbackfunction: (value: T, index: number, array: T[]) => any) {
    const newArray = [];
    for (var i = 0; i < this.length; i++) {
      const newValue = callbackfunction(this.elements[i], i, this.elements);
      if (newValue) {
        newArray[newArray.length] = this.elements[i];
      }
    }
    return new NewArray(newArray);
  }

  concat(...values: (T[] | T)[]) {
    const newArray = [...this.elements];
    for (var i = 0; i < values.length; i++) {
      const value = values[i];
      if (Array.isArray(value)) {
        for (var val of value) {
          newArray[newArray.length] = val;
        }
      } else {
        newArray[newArray.length] = value;
      }
    }
    return new NewArray(newArray);
  }

  reduce<U>(
    callbackfn: (acc: U, currVal: T, currIdx?: number, array?: T[]) => U,
    initialValue?: U
  ) {
    let acc: U;
    let startIdx = 0;

    if (initialValue !== undefined) {
      acc = initialValue;
      startIdx = 0;
    } else {
      if (this.length === 0) {
        throw new TypeError('No initial value');
      }
      acc = this.elements[0] as any;
      startIdx = 1;
    }

    for (let i = startIdx; i < this.length; i++) {
      acc = callbackfn(acc, this.elements[i], i, this.elements);
    }

    return acc;
  }

  reduceRight<U>(
    callbackfn: (acc: U, currVal: T, currIdx?: number, array?: T[]) => U,
    initialValue?: U
  ) {
    let acc: U;
    let startIdx = 0;

    if (initialValue !== undefined) {
      acc = initialValue;
      startIdx = this.length - 1;
    } else {
      if (this.length === 0) {
        throw new TypeError('No initial value');
      }
      acc = this.elements[this.length - 1] as any;
      startIdx = this.length - 2;
    }

    for (let i = startIdx; i >= 0; i--) {
      acc = callbackfn(acc, this.elements[i], i, this.elements);
    }

    return acc;
  }

  flat(depth: number = 1): T[] {
    let newArr = [];

    for (var i = 0; i < this.length; i++) {
      if (Array.isArray(this.elements[i]) && depth > 0) {
        const subArray = new NewArray(this.elements[i] as T[]);
        const flattenedSubArray = subArray.flat(depth - 1);

        for (let j = 0; j < flattenedSubArray.length; j++) {
          newArr[newArr.length] = flattenedSubArray[j];
        }
      } else {
        newArr[newArr.length] = this.elements[i];
      }
    }
    return newArr;
  }

  flatMap<U>(callback: (value: T, index: number, array: T[]) => U[]) {
    const newArray: U[] = [];
    for (let i = 0; i < this.length; i++) {
      const mappedResult = callback(this.elements[i], i, this.elements);

      for (let j = 0; j < mappedResult.length; j++) {
        newArray[newArray.length] = mappedResult[j];
      }
    }
    return new NewArray(newArray);
  }
  sort(): this {
    const n = this.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (String(this.elements[j]) > String(this.elements[j + 1])) {
          const temp = this.elements[j];
          this.elements[j] = this.elements[j + 1];
          this.elements[j + 1] = temp;
        }
      }
    }
    return this;
  }

  toString(): string {
    if (this.length === 0) {
      return '';
    }

    var newVal = '';
    for (let i = 0; i < this.length; i++) {
      newVal = newVal + this.elements[i];

      if (i < this.length - 1) {
        newVal = newVal + ',';
      }
    }
    return newVal;
  }

  toLocaleString(): string {
    if (this.length === 0) {
      return '';
    }

    return this.map((element) => {
      if (element && typeof (element as any).toLocaleString === 'function') {
        return (element as any).toLocaleString();
      }
      return String(element);
    }).join(',');
  }

  copyWithin(target: number, start: number, end?: number): this {
    const len = this.length;

    let to = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
    let from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    let final =
      end === undefined
        ? len
        : end < 0
        ? Math.max(len + end, 0)
        : Math.min(end, len);

    const count = Math.min(final - from, len - to);

    const temp: T[] = [];
    for (let i = 0; i < count; i++) {
      temp[i] = this.elements[from + i];
    }

    for (let i = 0; i < count; i++) {
      this.elements[to + i] = temp[i];
    }
    return this;
  }

  fill(value: T, start?: number, end?: number): this {
    const len = this.length;

    let startIdx =
      start === undefined
        ? 0
        : start < 0
        ? Math.max(len + start, 0)
        : Math.min(start, len);
    let endIdx =
      end === undefined
        ? len
        : end < 0
        ? Math.max(len + end, 0)
        : Math.min(end, len);

    for (let i = startIdx; i < endIdx; i++) {
      this.elements[i] = value;
    }

    return this;
  }

  entries() {
    const temp = this;
    let idx = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (idx < temp.length) {
          const value = [idx, temp.elements[idx]];
          idx++;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  values() {
    const temp = this;
    let idx = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (idx < temp.length) {
          return { value: temp.elements[idx++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  keys() {
    const temp = this;
    let idx = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (idx < temp.length) {
          return { value: idx++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  static isArray(target: any) {
    const value = Object.prototype.toString.call(target);
    return '[object Array]' === value;
  }

  static of(...items: unknown[]) {
    const arr = [];
    for (let i = 0; i < items.length; i++) {
      arr[i] = items[i];
    }
    return new NewArray(arr);
  }

  static from<T>(iterable: Iterable<T>) {
    const results = [];
    let index = 0;
    for (const value of iterable) {
      const mappedValue = value as any;
      results[results.length] = mappedValue;
      index++;
    }
    return new NewArray(results);
  }

  slice(start?: number, end?: number) {
    const temp = [];
    for (let i = start || 0; i < (end || this.length); i++) {
      temp[i] = this.elements[i];
    }
    return new NewArray(temp);
  }
}

const arr = ['God', 'jod', 'bgmi', 'hello'];

const data = new NewArray(arr);
