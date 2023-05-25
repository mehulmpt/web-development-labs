/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
	return function (...args) {}
}

export default debounce

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
