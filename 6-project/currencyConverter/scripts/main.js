let currentValue = "";
let onlyOnce = false;

const label = document.querySelector(".input-currency");
const label2 = document.querySelector(".output-currency");
const form = document.querySelector(".form-one");
const form2 = document.querySelector(".form-two");
const menu = document.querySelector(".menu");
const menu2 = document.querySelector(".menu2");
const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");

const fetchData = async (baseValue = "EUR") => {
	const response = await
	fetch("https://api.exchangeratesapi.io/latest?base=" + baseValue);
	
	const json = await response.json();

	main(json);
	return json;
}

const fetchForLabel = async (baseValue) => {
	const response = await
	fetch("https://api.exchangeratesapi.io/latest?base=" + baseValue);

	const json = await response.json();

	displayLabel1(json);
}

const fetchForLabel2 = async (baseValue) => {
	const response = await
	fetch("https://api.exchangeratesapi.io/latest?base=" + baseValue);

	const json = await response.json();

	displayLabel2(json);
}

const noLetters = () => {
	if (/["a-z"]+/.test(input.value)) {
		input.value = "";
	}
	if (/["a-z"]+/.test(input2.value)) {
		input2.value = "";
	}
}

const main = (value) => {	
	// Only display once, order to avoid select's item duplications (i.e. two CAD will appear if more than once)
	if (!onlyOnce) {
		display(value, menu);
		display(value, menu2);

		onlyOnce = true;
	}
}

// display all currencies to select menu 
const display = (response, elem) => {
	let currencyArr = [];
	currencyArr.push("EUR");
	for (const key in response.rates) {
		currencyArr.push(key);
	}

	currencyArr.sort();
	for (let i = 0; i < currencyArr.length; i++) {
		let option = document.createElement("option");
		option.textContent = currencyArr[i];
		option.setAttribute("value", currencyArr[i]);

		elem.appendChild(option);
	}
}

const displayLabel1 = (response) => {
	if (menu.value === menu2.value) {
		label.textContent = `1 ${menu.value} = 1 ${menu2.value}`;
		return ; 
	}
	label.textContent = `1 ${menu.value} = ${Math.floor(1 * response.rates[menu2.value] * 10000) / 10000} ${menu2.value}`;

}

const displayLabel2 = (response) => {
	if (menu.value === menu2.value) {
		label2.textContent = `1 ${menu.value} = 1 ${menu2.value}`;
		return ; 
	}

	label2.textContent = `1 ${menu2.value} = ${Math.floor(1 * response.rates[menu.value] * 10000) / 10000} ${menu.value}`;
}

const conversionInput = () => {
	currentValue = menu.value;

	if (menu.value === menu2.value) {
		noLetters();

		input2.value = input.value;

		fetchForLabel(menu.value);
		fetchForLabel2(menu2.value);
		return ; 
	}


	fetchData(currentValue).then((response) => {
		// if input field contain any letters then reset input field
		noLetters();

		fetchForLabel(menu.value);	
		fetchForLabel2(menu2.value);
		if (input.value) {
			input2.value = Math.floor(input.value * response.rates[menu2.value] * 100) / 100;
		} else {
			input2.value = "";
		}
	}) 

}


const conversionInput2 = () => {
	let	value = menu2.value;

	if (menu.value === menu2.value) {
		noLetters();

		input.value = input2.value;

		return ; 
	}

	fetchData(value).then((response) => {

		noLetters();

		
		if (input2.value) {
			input.value = Math.floor(input2.value * response.rates[menu.value] * 100) / 100;
		} else {
			input.value = "";
		}
	}) 
}

const swap = () => {
	let amount = input.value;

	let q_switch = menu.value;
	menu.value = menu2.value;
	menu2.value = q_switch;

	currentValue = menu.value;

	if (menu.value === menu2.value) {

		return ;
	}

	fetchData(currentValue).then((response) => {

		noLetters();

		fetchForLabel(menu.value);	
		fetchForLabel2(menu2.value);
		if (input.value) {
			input2.value = Math.floor(amount * response.rates[menu2.value] * 100) / 100;
		} else {
			input2.value = "";
		}
	})
}

fetchData();
fetchForLabel(menu.value);	
fetchForLabel2(menu2.value);
