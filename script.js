let button = document.querySelector("#backgroundToggle");
let form = document.querySelector("#form");
let fullName = document.querySelector("#Name");
let email = document.querySelector("#Email");
let message = document.querySelector("#Message");
let date = document.querySelector("#Date");

function toggleBackground(event) {
	background = document.querySelector("main");

	if (button.value == "ON") {
		button.value = "OFF";
		background.style.backgroundImage = "none";
		background.style.backgroundColor = "#242529";
		form.style.color = "#212529";
		form.style.backgroundColor = "#a4a9adf2";
		return;
	}

	if (button.value == "OFF") {
		button.value = "ON";
		background.style.backgroundImage = "url(./images/background.png)";
		background.style.backgroundColor = "#7aacdf";
		form.style.color = "white";
		form.style.backgroundColor = "#242529";
		return;
	}
}

function submitForm(event) {
	event.preventDefault();

	try {
		const obj = {
			nm: fullName.value,
			eml: email.value,
			msg: message.value,
			dt: date.value,
		};

		var info = false;

		for (item in obj) {
			if (obj[item]) info = true;
			else obj[item] = "No submission";
		}

		if (!info) throw new error();

		console.log("======Form Submission======");
		console.log(`Username: ${obj.nm}`);
		console.log(`Email: ${obj.eml}`);
		console.log(`Message: ${obj.msg}`);
		console.log(`Date: ${obj.dt}`);
	} catch (error) {
		console.warn("You must enter some data to submit this form");
	}
}

form.addEventListener("submit", submitForm);
button.addEventListener("click", toggleBackground);
