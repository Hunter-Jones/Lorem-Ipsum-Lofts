	let form = document.getElementById('form')

	form.addEventListener('submit', (e) => {

		e.preventDefault()

		let name = document.getElementById('user_name').value

		let unit = document.getElementById('unit').value

		let phone = document.getElementById('phone').value

        let issue = document.getElementById('issue').value

		if (name != "" && unit != "" && phone != "" && issue != "") {
			document.getElementById('result').innerHTML = `
			<p>Thank you, ${name}, for submitting your issue. We will visit you at unit ${unit} and contact you by phone at ${phone}
			no less than 24 hours in advance. The issue being addressed is:</p>
			<p>${issue}</p>
			`
		}	
    })