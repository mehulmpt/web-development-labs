/**
 * @param {number} n
 * @return {Function} counter
 */
export function createCounter(n) {
	return function () {};
}

// Sample Test Cases

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12

const secondCounter = createCounter(42);
counter(); // 43
counter(); // 44
