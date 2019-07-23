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