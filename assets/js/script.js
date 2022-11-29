// Adds current date to the header
var weekDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

var nineInput = document.getElementById('9amInput')
var nineBtn = document.getElementById('9amBtn')

function storeNote() {
	localStorage.setItem("9am", nineInput.value)
	renderLocal();
}

// Determines if item in local storage has a value
function renderLocal() {
	var nineAm = localStorage.getItem("9am");
	if (nineAm == null | nineAm == '') {
		return
	} else {
		nineInput.value = "";
		nineInput.value = nineAm;
	}
}


renderLocal()




nineBtn.addEventListener('click', storeNote)