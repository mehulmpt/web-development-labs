// ESM export
export const compose = (functions) => {
	return (x) => {
		functions.reverse().forEach((f) => {
			x = f(x)
		})
		return x
	}
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
