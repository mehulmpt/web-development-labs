/**
 * @param {Function} fn
 * @return {Function}
 */
export const curry = function (fn) {
	return function curried() {}
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
