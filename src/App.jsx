export const useGeolocation = () => {
	// Write the body of your hook here
	return {}
}

const App = () => {
	const { coords, error } = useGeolocation()

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div>
			<p>Latitude: {coords?.latitude}</p>
			<p>Longitude: {coords?.longitude}</p>
		</div>
	)
}

export default App
