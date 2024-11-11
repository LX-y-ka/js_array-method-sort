'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const fun =
      compareFunction === undefined ? defaultCompare : compareFunction;

    for (let i = 1; i < this.length; i++) {
      const currentValue = this[i];
      let j = i - 1;

      while (j >= 0 && fun(this[j], currentValue) > 0) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = currentValue;
    }

    return this;
  };

  const defaultCompare = (a, b) => {
    const A = a.toString();
    const B = b.toString();

    return A > B ? 1 : A < B ? -1 : 0;
  };
}

module.exports = applyCustomSort;
