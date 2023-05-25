/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const throttle = function (fn, t) {
	return function (...args) {}
}

export default throttle

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
