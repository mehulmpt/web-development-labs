/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
export async function promisePool(functions, n) {
	// your implementation here
}

/**
 * Example usage:
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
