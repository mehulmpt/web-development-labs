export const useTheme = () => {
	// Write your hook logic here
	return {}
}

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div
			style={{
				height: '100vh',
				transition: '0.3s ease-in',
				backgroundColor: theme === 'light' ? 'white' : 'black',
			}}
		>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	)
}

export default App
