const title = document.getElementById('title');
const calcForm = document.querySelector('form');
const calcNumbers = Object.values( document.querySelectorAll('#calc_numbers input') );
const calcButtons = Object.values( document.querySelectorAll('#calc_buttons button') );
 
const calculator = (event) => {
	let num1 = +calcNumbers[0].value;
	let num2 = +calcNumbers[1].value;
	let opt = event.target.textContent;

	if (opt == '+') return printResult(num1 + num2);
	if (opt == '-') return printResult(num1 - num2);
	if (opt == '*') return printResult(num1 * num2);
	if (opt == '/') return printResult(num1 / num2);
	if (opt == '%') return printResult(num1 % num2);
}

const printResult = (result = 0) => title.textContent = result;

calcButtons.forEach((item) => item.addEventListener('click', calculator));