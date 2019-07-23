function validateForm() {
    var count = 0;

    if (document.getElementById('contactName').value == "") {
        alert('Name cannot be empty');
        count++;
    }

    if (document.getElementById('contactMessage').value.length < 5) {
        alert("Message must be longer than 5 letters.");
        count++;
    }

    if (count == 0) {
        alert('Thank you for leaving a feedback. Clicking Okay will take you to Menu page');
        return true;
    } else {
        return false;
    }
};

function showPizzaLine() {
    document.getElementById('comeforpizza').innerHTML = '<i>Come for pizza - stay for the wings!' +
        'Best known for our finest ingredients and Gourmet Pizza.</i>';
}

function showOfferOnWeekdays() {
    var today = new Date().getDay();
    if (today >= 1 && today <= 5) {
        document.getElementById('showThisOfferOnWeekdays').innerHTML = '<h3>Add a small order of fries to any sandwich' +
            'Just .99 Cents</h3>';
    }
}