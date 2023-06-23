export const useLocalStorage = (key, initialValue) => {
	// Write the body of the hook here
	return {}
}

const App = () => {
	const { value, setValue } = useLocalStorage('inputValue', '')

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<div>
			<input type="text" value={value} onChange={handleChange} />
		</div>
	)
}

export default App
