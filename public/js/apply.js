	let form = document.getElementById('apply_form')

	console.log(form)
	form.addEventListener('submit', (e) => {

		e.preventDefault()


		let name = document.getElementById('name').value
		document.getElementById('result').innerHTML = `
			<p>Thank you ${name} for submitting your application! We will get back to you shortly.</p>
			`
    })

	function scrolldiv() {
		var elem = document.getElementById("result");
		elem.scrollIntoView({behavior:"smooth"});
	}