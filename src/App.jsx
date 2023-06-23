export const useTodoList = () => {
	// Write the body of your hook here
	return {}
}

const App = () => {
	const { todos, addTodo, removeTodo, toggleTodo } = useTodoList()

	const handleSubmit = (e) => {
		e.preventDefault()
		addTodo(e.target.elements.todoText.value)
		e.target.reset()
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="todoText" />
				<button type="submit">Add Todo</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => removeTodo(todo.id)}>
							Remove
						</button>
						<button onClick={() => toggleTodo(todo.id)}>
							{todo.completed ? 'Incomplete' : 'Complete'}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
