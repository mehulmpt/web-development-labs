import React, { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h2 data-testid="count-id">Count: {count}</h2>
			<button data-testid="inc-id" onClick={() => setCount(count + 1)}>
				+
			</button>
			<button data-testid="dec-id" onClick={() => setCount(count - 1)}>
				-
			</button>
		</div>
	)
}

export default Counter
