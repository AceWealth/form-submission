'use-strict';
// Global variables
const name = document.getElementById('name'); // Grab name location
name.focus(); // Set focus on name location
const email = document.getElementById('mail');

const otherTextBox = document.getElementById('other-title'); // Select textbox for Other display
otherTextBox.style.display = 'none'; // Set textbox to not show until called
const other = document.getElementById('title'); // Grab job titles
// console.log(other);

//Variabled to construct t-shirt elements
const design = document.getElementById('design'); // Grab t-shirt design choices inputbox
const designColor = document.getElementById('color'); // Grab t-shirt color choices inputbox
designColor.style.display = 'none'; // Set t-shirt color selection to hidden as default
const jsPuns = document.getElementById('jsPuns'); // Designate a group for jsPuns t-shits
const hearts = document.getElementById('hearts'); // Designate a group for hearts t-shirts

//Variables to construct checkbox elements
const activities = document.querySelector('.activities'); // Variable to grab activities list to add total price on selected activities
const activitiesCheck = document.querySelector('.activities').children;
console.log(activitiesCheck);
const checkboxes = document.querySelectorAll('input[type=checkbox]'); // Grab checkboxes from activity list
let total = 0; // Set totals for event purchase to none
const totalHolder = document.createElement('div'); // Create placeholder for event cost totals display
const totalInnerHTML = document.createElement('h2'); // create placeholder for event totals
totalHolder.appendChild(totalInnerHTML); // show event totals to window when selected

// Variables to construct payment method function
const paymentMethod = document.getElementById('payment'); // Grab all payment methods
const creditCard = document.getElementById('credit-card'); // Credit card details for payment
const creditCardNumber = document.getElementById('cc-num'); // Credit card number
const zip = document.getElementById('zip'); // Credit card details for verification
const cvv = document.getElementById('cvv'); // Credit card cvv details for verification
const expMonth = document.getElementById('exp-month'); // Credit card exp Month details for validation
const expYear = document.getElementById('exp-year'); // Credit card exp Year details for validation
const payPal = document.getElementById('paypal'); // Paypal details for payment
const bitcoin = document.getElementById('bitcoin'); // Bitcoin details for payment

// Variables for submit form validation
const submit = document.querySelector('button[type="submit"]');

// console.log(date);
// console.log(creditCard);

// Create span element to hold username invalid message, set to not display unless username invalid
nameLabel = document.createElement('span');
nameShow = document.createTextNode("Can only contain letters a-z in lowercase");
nameLabel.style.color = 'rgb(195, 17, 50)';
nameLabel.appendChild(nameShow);
name.after(nameLabel);
nameLabel.style.display = 'none';

// Creat a span element to hold email invalid message, set to not display unless email invalid
emailLabel = document.createElement('span');
emailShow = document.createTextNode("Must be a valid email address");
emailLabel.style.color = 'rgb(195, 17, 50)';
emailLabel.appendChild(emailShow);
email.after(emailLabel);
emailLabel.style.display = 'none';

// Create a span element to hold activites error message if submitted without selecting atleast 1 activity
activityLabel = document.createElement('span');
activityShow = document.createTextNode("You must enter atleast 1 activity");
activityLabel.style.color = 'rgb(195, 17, 50)';
activityLabel.appendChild(activityShow);
activities.after(activityLabel);
activityLabel.style.display = 'none';

// Creat e a span element to hold Credit Card number invalid message. Set to not display unless invalid
ccLabel = document.createElement('span');
ccShow = document.createTextNode("You must enter a valid Credit Card number");
ccLabel.style.color = 'rgb(195, 17, 50)';
ccLabel.appendChild(ccShow);
creditCardNumber.after(ccLabel);
ccLabel.style.display = 'none';

// Creat a span element to hold zip code invalid message, set to not display unless zipcode invalid
zipLabel = document.createElement('span');
zipShow = document.createTextNode("You must enter a valid Zipcode");
zipLabel.style.color = 'rgb(195, 17, 50)';
zipLabel.appendChild(zipShow);
zip.after(zipLabel);
zipLabel.style.display = 'none';

// Creat e a span element to hold Credit Card cvv number invalid message. Set to not display unless invalid
cvvLabel = document.createElement('span');
cvvShow = document.createTextNode("You must enter a valid ccv number");
cvvLabel.style.color = 'rgb(195, 17, 50)';
cvvLabel.appendChild(cvvShow);
cvv.after(cvvLabel);
cvvLabel.style.display = 'none';

// Set payment method option to hidden except credit card until unselected
creditCard.style.display = 'block';
payPal.style.display = 'none';
bitcoin.style.display = 'none';

// Function to check regex of Username to make sure it is valid
const isValidUserName = (name) => {
  return /^[a-z]+$/.test(name);
};

// Function to check regex value of email to make sure it is valid
const isValidEmail = (mail) => {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
};

// Function to check regex value of creditcard number for validation
const isValidCreditCard = (creditCardNumber) => {
  return /^[0-9]{13}(?:-[0-9]{12})?$/.test(creditCardNumber);
};

//function to check credit card cvv number for validation
const isValidCvv = (cvv) => {
  return /^[0-9]{3}$/.test(cvv);
};

// Function to check if zip code is valid, atleast 5 digits long
const isValidZip = (zip) => {
  return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
}

// Function to show or hide elements depending on boolean value
const showOrHideTip = (show, element) => {
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
};

// Validation check for mistyped inputs
function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

// Event listener for username input validation
name.addEventListener("input", createListener(isValidUserName));

// Event listener for email input validation
email.addEventListener("input", createListener(isValidEmail));

// Event listener for credit card number validation
creditCardNumber.addEventListener("input", createListener(isValidCreditCard));

// Event listener for ccv validation
cvv.addEventListener("input", createListener(isValidCvv));

// Event listener for zipcode input validation
zip.addEventListener("input", createListener(isValidZip));

// Create eventlistener for when job title 'other' is selected and if so, display other textbox field
 other.addEventListener('change', () => {
   if (other.value === 'other') {
    otherTextBox.style.display = 'block';
   } else {
    otherTextBox.style.display = 'none';
  }
});

/*
Create eventListener for when a t-shirt design is selected to
only display the colors that relates to that design, otherwise hide the other colors
*/
design.addEventListener('change', () => {
  if (design.value === 'js puns') {
    designColor.style.display = 'block';
    color.appendChild(jsPuns);
    color.removeChild(hearts);
  } else if (design.value === 'heart js') {
    designColor.style.display = 'block';
    color.appendChild(hearts);
    color.removeChild(jsPuns);
  } else {
    designColor.style.display = 'none';
  }
});

activities.addEventListener('change', () => {
  if (checkboxes[1].checked) {
      checkboxes[3].parentNode.style.color = 'rgba(128,128,128, 0.5)';
      checkboxes[3].disabled = true;
  } else {
    checkboxes[3].disabled = false;
    checkboxes[3].parentNode.style.color = 'rgba(0,0,0,1)';
  }
  if (checkboxes[2].checked) {
      checkboxes[4].parentNode.style.color = 'rgba(128,128,128, 0.5)';
      checkboxes[4].disabled = true;
  } else {
    checkboxes[4].disabled = false;
    checkboxes[4].parentNode.style.color = 'rgba(0,0,0,1)';
  }
  if (checkboxes[3].checked) {
      checkboxes[5].disabled = true;
      checkboxes[5].parentNode.style.color = 'rgba(128,128,128, 0.5)';
  } else {
      checkboxes[5].disabled = false;
      checkboxes[5].parentNode.style.color = 'rgba(0,0,0,1)';
  }
  if (checkboxes[4].checked) {
      checkboxes[2].disabled = true;
      checkboxes[2].parentNode.style.color = 'rgba(128,128,128, 0.5)';
  } else {
    checkboxes[2].disabled = false;
    checkboxes[2].parentNode.style.color = 'rgba(0,0,0,1)';
  }
});

// Function to add up the cost of event selected totals
const addUpCost = (cost) => {
  total += cost;
  activities.appendChild(totalHolder);
  totalInnerHTML.innerHTML = `Your total is $${total} `;
}

// Event listener for adding up total for each event selected and subtracting cost if unselected
const all = document.querySelector('input[name=all]').addEventListener('change', () => {
  if (checkboxes[0].checked) {
    addUpCost(200);
  } else {
    addUpCost(-200);
  }
});

const jsFrameworks = document.querySelector('input[name=js-frameworks]').addEventListener('change', () => {
  if (checkboxes[1].checked) {
    addUpCost(100);
  } else {
    addUpCost(-100);
  }
});

const jsLibs = document.querySelector('input[name=js-libs]').addEventListener('change', () => {
  if (checkboxes[2].checked) {
    addUpCost(100);
  } else {
    addUpCost(-100);
  }
});

const express = document.querySelector('input[name=express]').addEventListener('change', () => {
  if (checkboxes[3].checked) {
    addUpCost(100);
  } else {
    addUpCost(-100);
  }
});

const node = document.querySelector('input[name=node]').addEventListener('change', () => {
  if (checkboxes[4].checked) {
    addUpCost(100);
  } else {
    addUpCost(-100);
  }
});

const buildTools = document.querySelector('input[name=build-tools]').addEventListener('change', () => {
  if (checkboxes[5].checked) {
    addUpCost(100);
  } else {
    addUpCost(-100);
  }
});

const npm = document.querySelector('input[name=npm]').addEventListener('change', () => {
  if (checkboxes[6].checked) {
    addUpCost(100);
  } else {
    addUpCost(-100);
  }
});

/*
Function to display only the payment method selected,
otherwise hide other payment options except credit card default
*/
paymentMethod.addEventListener('change', () => {
  if (paymentMethod.value === 'credit-card') {
   payPal.style.display = 'none';
   bitcoin.style.display = 'none';
   creditCard.style.display = 'block';
 } else if (paymentMethod.value === 'paypal') {
   creditCard.style.display = 'none';
   bitcoin.style.display = 'none';
   payPal.style.display = 'block';
 } else if (paymentMethod.value === 'bitcoin') {
   creditCard.style.display = 'none';
   payPal.style.display = 'none';
   bitcoin.style.display = 'block';
 } else {
   creditCard.style.display = 'block';
   payPal.style.display = 'none';
   bitcoin.style.display = 'none';
 }
});

// If input fields are empty upon submit off form, display message to ask for input before submit and display in different color
submit.addEventListener("click", (e) => {
    if (name.value == '') {
        name.style.borderColor = "rgb(195, 17, 50)";
        nameLabel.style.display = 'block';
        nameLabel.style.color = "rgb(195, 17, 50)";
        nameLabel.style.fontWeight = "bold";
        name.focus();
        e.preventDefault();
    if (email.value == '') {
        email.style.borderColor = "rgb(195, 17, 50)";
        emailLabel.style.display = 'block';
        emailLabel.style.color = "rgb(195, 17, 50)";
        emailLabel.style.fontWeight = "bold";
        email.focus();
        e.preventDefault();
    } else {
        email.style.borderColor = "";
        emailLabel.style.color = "";
        emailLabel.style.fontWeight = "";
    }
    if (activitiesCheck.checked <= 8) {
        activitiesCheck.style.borderColor = 'rgba(128,128,128, 0.5)';
        activityLabel.style.display = 'block';
        activityLabel.style.color = "rgb(195, 17, 50)";
        activityLabel.style.fontWeight = "bold";
        activities.focus();
    } else {
        activityLabel.style.color = "";
        activityLabel.style.fontWeight = "";
        e.preventDefault();
    }
    if (creditCardNumber.value == '') {
        creditCardNumber.style.borderColor = "rgb(195, 17, 50)";
        ccLabel.style.display = 'block';
        ccLabel.style.color = "rgb(195, 17, 50)";
        ccLabel.style.borderColor = "rgb(195, 17, 50)";
        ccLabel.style.fontWeight = "bold";
    } else {
        creditCardNumber.borderColor = "";
        ccLabel.style.color = "";
        ccLabel.style.borderColor = "";
        ccLabel.style.fontWeight = "";
        e.preventDefault();
    }
    if (zip.value == '') {
        zip.style.borderColor = "rgb(195, 17, 50)";
        zipLabel.style.display = 'block';
        zipLabel.style.color = "rgb(195, 17, 50)";
        zipLabel.style.fontWeight = "bold";
        zipLabel.style.borderColor = "rgb(195, 17, 50)";
    } else {
        zip.style.borderColor = "";
        zipLabel.style.color = "";
        zipLabel.style.borderColor = "";
        zipLabel.style.fontWeight = "";
        e.preventDefault();
        }
    if (cvv.value == '') {
        cvv.style.borderColor = "rgb(195, 17, 50)";
        cvvLabel.style.display = 'block';
        cvvLabel.style.color = "rgb(195, 17, 50)";
        cvvLabel.style.fontWeight = "bold";
        cvvLabel.style.borderColor = "rgb(195, 17, 50)";
    } else {
        cvv.style.borderColor = "";
        cvvLabel.style.color = "";
        cvvLabel.style.borderColor = "";
        cvvLabel.style.fontWeight = "";
        e.preventDefault();
      }
    }
    else if (name.value == '') {
        name.style.borderColor = "";
        nameLabel.style.color = "";
        nameLabel.style.fontWeight = "";
        nameLabel.style.borderColor = "";
  } else {
    window.open("next.html");
      }
  });
