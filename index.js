function fetchData(url) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => console.log(data))
}

console.log('Fetching data...')
fetchData('https://jsonplaceholder.typicode.com/todos/1')
