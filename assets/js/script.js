// Adds current date to the header
var weekDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

// Selects each input
var inputEls = document.querySelectorAll('.input')
// Selects each save button
var saveEls = document.querySelectorAll('.save')

function storeNote(e) {
    e.stopPropagation();

    const button = e.target;
    const time = button.dataset.time;
    const input = e.target.parentElement.parentElement.childNodes[3].childNodes[0];

	localStorage.setItem(time, input.value)
	// renderLocal();
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

for (i=0; i < saveEls.length; i++) {
renderLocal(inputEls[i], saveEls[i].dataset.time)

// saveEls[i].addEventListener('click', storeNote(inputEls[i], saveEls[i].dataset.time))
}

saveEls.forEach((btn) => btn.addEventListener("click", storeNote));