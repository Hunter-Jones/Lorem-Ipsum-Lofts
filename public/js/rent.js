let form = document.getElementById('rent_form')

console.log(form)
form.addEventListener('submit', (e) => {

	e.preventDefault()


	let name = document.getElementById('name').value
	let payment = document.getElementById('payment').value
	let balance = document.getElementById('balance').value
	if (balance == null) {
		balance = 875;
    }
	balance -= payment
	document.getElementById('balance').innerHTML = "$" + balance;
	if (balance < 0) {
		document.getElementById('result').innerHTML = `
			<p>Thank you ${name} for submitting your payment! You do not have a balance at this time.</p>	`
	}
	else {
		document.getElementById('result').innerHTML = `
			<p>Thank you ${name} for submitting your payment! Balance remaining: $${balance}</p>	`
    }

})

function scrolldiv() {
	var elem = document.getElementById("result");
	elem.scrollIntoView({behavior:"smooth"});
}
