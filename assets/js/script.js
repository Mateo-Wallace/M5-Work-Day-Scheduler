// Adds current date to the header
var weekDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

// var nineInput = document.getElementById('9amInput')
// var nineBtn = document.getElementById('9amBtn')

var inputEls = document.getElementsByClassName('input')
var saveEls = document.getElementsByClassName('save')

function storeNote(input, time) {
	localStorage.setItem(time, input.value)
	renderLocal();
}

// Determines if item in local storage has a value
function renderLocal(input, time) {
	var localTime = localStorage.getItem(time);
	if (localTime == null | localTime == '' | localTime=='undefined') {
		return
	} else {
		input.value = "";
		input.value = localTime;
	}
}

console.log(inputEls)

// saveEls.forEach(input => input.addEventListener('click', renderLocal(input, input.dataset.time)));

// saveEls.forEach(input => input.addEventListener('click', storeNote(input.dataset.time)));

// nineBtn.addEventListener('click', storeNote)

for (i=0; i < saveEls.length; i++) {
renderLocal(inputEls[i], saveEls[i].dataset.time)

saveEls[i].addEventListener('click', storeNote(inputEls[i], saveEls[i].dataset.time))
}