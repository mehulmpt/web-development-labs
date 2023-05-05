/*
 * Implement your fetchData and processData functions below
 *
 */

/* Do not modify below this line */

const main = async () => {
	try {
		const data = await fetchData()
		const processed = await processData(data)
		console.log(processed)
	} catch (err) {
		console.error('Error Occurred:', err)
	}
}

main()
