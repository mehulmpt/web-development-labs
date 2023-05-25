class TimeLimitedCache {
	constructor() {
		this.cache = new Map()
	}

	/**
	 * @param {number} key
	 * @param {number} value
	 * @param {number} time until expiration in ms
	 * @return {boolean} if un-expired key already existed
	 */
	set(key, value, duration) {
		const expirationTime = Date.now() + duration
		const existing = this.cache.get(key)

		if (existing && existing.expirationTime > Date.now()) {
			existing.value = value
			existing.expirationTime = expirationTime
			return true
		}

		this.cache.set(key, { value, expirationTime })
		return false
	}

	/**
	 * @param {number} key
	 * @return {number} value associated with key
	 */
	get(key) {
		const entry = this.cache.get(key)

		if (entry && entry.expirationTime > Date.now()) {
			return entry.value
		}

		return -1
	}

	/**
	 * @return {number} count of non-expired keys
	 */
	count() {
		let count = 0
		this.cache.forEach((value, key) => {
			if (value.expirationTime > Date.now()) {
				count++
			}
		})
		return count
	}
}

export default TimeLimitedCache
