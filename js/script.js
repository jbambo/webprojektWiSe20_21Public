//toggle mobile navi
function toggleMobileNavigation() {
    document.getElementById("mainNavi").classList.toggle("open");
}

//event listener for mobile navi
document.getElementById("toggle_menu").addEventListener("click", toggleMobileNavigation);

//aside section

//function for showing weekdays
function showWeekdaysOfEmployee(element) {
    let today = new Date(); //date object
    let availableDays = [1, 2, 4, 5]; //array of available days 0-6
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]//array of weekdays as strings
    let todayWeekday = today.getDay(); //pass the day from object date to a variable
    let availableWeekdays = []; //empty array

    //for loop to iterate over available days
    for (let i = 0; i < availableDays.length; i++) {
        let weekdayText = weekdays[availableDays[i]]; //set weekdaytext to a available day

        if (todayWeekday == availableDays[i]) { //if today is the available day make it span element
            weekdayText = "<span>" + weekdayText + "</span>";
        }//if
        availableWeekdays.push(weekdayText); //fill the empty array with available days
    }//end for loop

    let sentenceAvailability = "I am available on the following days: <br>" + availableWeekdays.join(", ");//print array to string with ", " between the elements

    element.innerHTML = sentenceAvailability; //pass the computed string to element

}// function end

let availabilityContainer = document.getElementById("availability_days"); //pass the element with id to variable
//check if the element is in DOM
if (availabilityContainer) {
    showWeekdaysOfEmployee(availabilityContainer); //initialize the function with variable
}

//form options

let radioButtons = document.getElementsByName("format");

radioButtons.forEach(function (element) {
    element.addEventListener("click", function () {
        let contactForm = document.getElementById("contact_form");
        contactForm.classList.remove("newsletter", "contact");
        contactForm.classList.add(element.value)
    });
});

// validate form
function checkContactForm() {

    let format = document.getElementById("contact_form").classList.value;

    let name = document.getElementsByName("username")[0];
    let email = document.getElementsByName("usermail")[0];
    let message = document.getElementsByName("user_message")[0];
    let errorMessage = document.getElementById("error_messages");
    let phoneNumber = document.getElementsByName("phone")[0];
    let errorMessageText = "";


    errorMessage.innerHTML = errorMessageText;


    errorMessage.classList.remove("show");
    name.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");
    message.parentElement.classList.remove("error");
    phoneNumber.parentElement.classList.remove("error");

   //check name
    if (name.value === "" && format === "contact") {
        name.parentElement.classList.add("error");
        errorMessageText += "Enter name!<br>";
    }

    //check  email
    if (email.value === "" || email.value.indexOf("@") === -1) {
        email.parentElement.classList.add("error");
        errorMessageText += "Enter valid email!<br>";
    }

    if (phoneNumber.value === "" && format === "contact") {
        phoneNumber.parentElement.classList.add("error");
        errorMessageText += "Enter phone number!<br>";
    }

    //check message
    if (message.value === "" && format === "contact") {
        message.parentElement.classList.add("error");
        errorMessageText += "Enter message!<br>";
    }


    //show error text or show thanks
    if (errorMessageText) {
        errorMessage.innerHTML = errorMessageText;
        errorMessage.classList.add("show");
    } else {
        location.href = "danke.html";
    }

    console.log(format);
}


document.getElementById("submitButton").addEventListener("click", checkContactForm);


//back to top
function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

document.getElementById("scrollToTop").addEventListener("click", scrollToTop);

document.body.onscroll = function () {
    document.getElementById("scrollToTop").classList.remove("show");

    if (self.pageYOffset > 300) {
        document.getElementById("scrollToTop").classList.add("show");
    }
};







