export default class TimeLimitedCache {
	constructor() {}

	/**
	 * @param {number} key
	 * @param {number} value
	 * @param {number} time until expiration in ms
	 * @return {boolean} if un-expired key already existed
	 */
	set(key, value, duration) {}

	/**
	 * @param {number} key
	 * @return {number} value associated with key
	 */
	get(key) {}

	/**
	 * @return {number} count of non-expired keys
	 */
	count() {}
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
