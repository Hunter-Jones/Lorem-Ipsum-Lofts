	let form = document.getElementById('apply_form')

	console.log(form)
	form.addEventListener('submit', (e) => {

		e.preventDefault()


		let name = document.getElementById('name').value
		document.getElementById('result').innerHTML = `
			<p>Thank you ${name} for submitting your payment</p>
			`
    })