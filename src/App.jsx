export const useWindowDimensions = () => {
	// Write your hook here
	return {}
}

const App = () => {
	const { width, height } = useWindowDimensions()

	return (
		<div>
			<h2>Window Dimensions:</h2>
			<p>Width: {width}</p>
			<p>Height: {height}</p>
		</div>
	)
}

export default App
