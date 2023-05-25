/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
export const debounce = function (fn, t) {
	return function (...args) {}
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
