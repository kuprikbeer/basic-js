import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(num) {
  function innerSum(n) {
    let str = n.toString();
    let length = n.toString().length;
    let sum = 0;
    let a = 0;
    for (let i = 0; i < length; i++) {
      a = +str[i]
      sum = sum + a;
    }
    return sum;
  }
  let a = innerSum(num);
  if (a > 9) {
    let z = innerSum(a)
    return z;
  } else return a;
}
