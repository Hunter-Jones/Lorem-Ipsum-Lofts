
	let form = document.getElementById('tour_form')
console.log(form)
	form.addEventListener('submit', (e) => {

		e.preventDefault()

		let first_name = document.getElementById('first_name').value
		let last_name = document.getElementById('last_name').value
		let time = document.getElementById('time').value
		let date = document.getElementById('date').value
        let phone = document.getElementById('phone_num').value

		document.getElementById('result').innerHTML = `
			<p>Thank you ${first_name} ${last_name} for submitting your request. We will get back to you soon at ${phone}.</p>
			`
    })

	function scrolldiv() {
		var elem = document.getElementById("result");
		elem.scrollIntoView({behavior:"smooth"});
	}