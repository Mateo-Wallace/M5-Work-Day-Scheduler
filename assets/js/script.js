// Adds current date to the header
var weekDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

// Selects each input
var inputEls = document.querySelectorAll('.input')
// Selects each save button
var saveEls = document.querySelectorAll('.save')

// saves user input to local storage
function storeNote(e) {
    e.stopPropagation();

    const button = e.target;
    const time = button.dataset.time;
    const input = button.parentElement.parentElement.childNodes[3].childNodes[0];

    localStorage.setItem(time, input.value);
};

// Determines if item in local storage has a value
function renderLocal(input, time) {
    var localTime = localStorage.getItem(time);
    if (localTime == null | localTime == '' | localTime == 'undefined') {
        return;
    } else {
        input.value = "";
        input.value = localTime;
    };
};

// changes color based on if time is in past or future
function colorChange(button) {
    const time = +button.dataset.time;
    var currentTime = +moment().format('H');
    const rowDiv = button.parentElement.parentElement;

    if (time < currentTime) {
        rowDiv.setAttribute('class', 'past');
    } else if (time == currentTime) {
        rowDiv.setAttribute('class', 'present');
    } else {
        rowDiv.setAttribute('class', 'future');
    };
};

// Renders locally stored values for each input
for (i = 0; i < saveEls.length; i++) {
    renderLocal(inputEls[i], saveEls[i].dataset.time);
};

// Adds event listener to each save button and checks time to change color
saveEls.forEach((button) => {
    button.addEventListener("click", storeNote);
    colorChange(button);
});