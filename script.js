document.getElementById('submit_btn').addEventListener('click', function () {
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const message = document.getElementById('message').value

	const data = {
		name: name,
		email: email,
		message: message,
	}

	const json = JSON.stringify(data)
	document.getElementById('json_output').innerText = json
})
