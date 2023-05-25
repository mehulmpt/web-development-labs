// Enhance the Array.prototype with the groupBy method
Array.prototype.groupBy = function (fn) {
	const result = {}

	for (const item of this) {
		const key = fn(item)
		if (result[key]) {
			result[key].push(item)
		} else {
			result[key] = [item]
		}
	}

	return result
}

export { Array }
