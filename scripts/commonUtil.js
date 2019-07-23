//this function is called in contact.html
//Function that makes sure neccessary elements are filled when user is submitting feedback
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

//Called on body onload in home.html
//A function that just shows a line when body loads. This page has nothing worthy to change.
function showPizzaLine() {
    document.getElementById('comeforpizza').innerHTML = '<i>Come for pizza - stay for the wings!' +
        'Best known for our finest ingredients and Gourmet Pizza.</i>';
}

//called on body onload in menu.html"
//Function that shows an offer that is only available on weekdays.
function showOfferOnWeekdays() {
    var today = new Date().getDay();
    if (today >= 1 && today <= 5) {
        document.getElementById('showThisOfferOnWeekdays').innerHTML = '<h3>Add a small order of fries to any sandwich' +
            'Just .99 Cents</h3>';
    }
}

//called when placing an order on cart.html
//A function that shows alert on the items that are ordered by the user.
function pickupAtTheStore() {
    var zinger = document.getElementById('zingerburger').checked;
    var bunkabab = document.getElementById('bunkabab').checked;
    var content = '';
    var count = 0;
    if (zinger) {
        count++;
        content += 'Zinger Burger will be ready for pickup after 15 minutes of placing this order \n';
    }

    if (bunkabab) {
        count++;
        content += 'Bun Kabab will ready for pickup after 15 minutes of placing this order \n';
    }

    if (count > 0) {
        content += 'Order Number: ' + new Date().getTime();
        alert(content);
        document.getElementById('zingerburger').checked = false;
        document.getElementById('bunkabab').checked = false;
    }
}


//One Common Function That appears for all pages
// A function that shows special discount everyday --> 15 percent off everyday between 10am till 11am
$( document ).ready(function() {
    var date = new Date();
    if(date.getHours() >= 9 && date.getHours() <= 10){
        $("#headerdiv").append("<p> Today only! 15 % off! Order Now! </p>");
    }
});

