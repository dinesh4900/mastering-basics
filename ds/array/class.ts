class NewArray<T> {
  constructor(private elements: T[]) {}

  get length() {
    let count = 0;
    for (const index of this.elements) {
      count++;
    }
    return count;
  }

  indexOf(searchVal: string, startFrom: number = 0) {
    for (var i = startFrom; i < valueee.length; i++) {
      if (valueee[i] === searchVal) {
        return i;
      }
    }
    return undefined;
  }
}

const valueee = ['God', 'jod', 'bgmi', 'hello'];

const data = new NewArray(valueee);
console.log('## length', data.length);
console.log('## indexOf', data.indexOf('God', 1));
