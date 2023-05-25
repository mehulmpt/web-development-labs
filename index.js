// You can import any user code you want to import dynamically
import { memoize } from './index.js'

/**
 * @param {Function} fn
 */
function memoize(fn) {
	const cache = new Map()

	return function (...args) {
		const key = JSON.stringify(args)
		if (cache.has(key)) {
			return cache.get(key)
		}
		const result = fn.apply(this, args)
		cache.set(key, result)
		return result
	}
}

export { memoize }
