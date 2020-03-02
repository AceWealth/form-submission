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
activityShow = document.createTextNode("You must enter at least 1 activity");
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
cvvShow = document.createTextNode("You must enter a valid cvv number");
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
  return /^[0-9]{13,16}(?:-[0-9]{12})?$/.test(creditCardNumber);
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

// Event listener for when an event is checked that co-incides with another event held at the same time, that other event will become disabled.
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
activities.addEventListener('change', (e) => {
const clicked = e.target;
const clickedCost = clicked.getAttribute("data-cost");
const parsedNum = parseInt(clickedCost, 10);
// Function to add up the cost of event selected totals
if (clicked.checked) {
  total += parsedNum;
} else if (!clicked.checked) {
  total = 0;
} else {
  total -= parsedNum;
}
  activities.appendChild(totalHolder);
  totalInnerHTML.innerHTML = `Your total is $${total} `;
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
        nameLabel.innerHTML = nameLabel.innerHTML.replace("Can only contain letters a-z in lowercase", "Please enter your username");
        name.style.borderColor = "rgb(195, 17, 50)";
        nameLabel.style.display = 'block';
        nameLabel.style.color = "rgb(195, 17, 50)";
        nameLabel.style.fontWeight = "bold";
        name.focus();
        e.preventDefault();
    if (email.value == '') {
        emailLabel.innerHTML = emailLabel.innerHTML.replace("Must be a valid email address", "Please enter your email address");
        email.style.borderColor = "rgb(195, 17, 50)";
        emailLabel.style.display = 'block';
        emailLabel.style.color = "rgb(195, 17, 50)";
        emailLabel.style.fontWeight = "bold";
        e.preventDefault();
    } else {
        email.style.borderColor = "";
        emailLabel.style.color = "";
        emailLabel.style.fontWeight = "";
    }
    let activityLength = 0;
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked){
          activityLength++;
        }
      }
      if (activityLength === 0) {
          activities.style.borderColor = "rgb(195, 17, 50)";
          activityLabel.style.display = 'block';
          activityLabel.style.color = "rgb(195, 17, 50)";
          activityLabel.style.fontWeight = "bold";
          e.preventDefault();
          } else  {
          activityLabel.style.display = 'none';
          activityLabel.style.color = "";
          activityLabel.style.fontWeight = "";
        }
    if (creditCardNumber.value == '') {
        ccLabel.innerHTML = ccLabel.innerHTML.replace("You must enter a valid Credit Card number", "Please enter your Credit Card Number");
        creditCardNumber.style.borderColor = "rgb(195, 17, 50)";
        ccLabel.style.display = 'block';
        ccLabel.style.color = "rgb(195, 17, 50)";
        ccLabel.style.borderColor = "rgb(195, 17, 50)";
        ccLabel.style.fontWeight = "bold";
        e.preventDefault();
    } else {
        creditCardNumber.borderColor = "";
        ccLabel.style.color = "";
        ccLabel.style.borderColor = "";
        ccLabel.style.fontWeight = "";
    }
    if (zip.value == '') {
        zipLabel.innerHTML = zipLabel.innerHTML.replace("You must enter a valid Zipcode", "Please enter your Zipcode");
        zip.style.borderColor = "rgb(195, 17, 50)";
        zipLabel.style.display = 'block';
        zipLabel.style.color = "rgb(195, 17, 50)";
        zipLabel.style.fontWeight = "bold";
        zipLabel.style.borderColor = "rgb(195, 17, 50)";
        e.preventDefault();
    } else {
        zip.style.borderColor = "";
        zipLabel.style.color = "";
        zipLabel.style.borderColor = "";
        zipLabel.style.fontWeight = "";
        }
    if (cvv.value == '') {
        cvvLabel.innerHTML = cvvLabel.innerHTML.replace("You must enter a valid cvv number", "Please enter your cvv number");
        cvv.style.borderColor = "rgb(195, 17, 50)";
        cvvLabel.style.display = 'block';
        cvvLabel.style.color = "rgb(195, 17, 50)";
        cvvLabel.style.fontWeight = "bold";
        cvvLabel.style.borderColor = "rgb(195, 17, 50)";
        e.preventDefault();
    } else {
        cvv.style.borderColor = "";
        cvvLabel.style.color = "";
        cvvLabel.style.borderColor = "";
        cvvLabel.style.fontWeight = "";
      }
  } else {
    name.style.borderColor = "none";
    nameLabel.style.color = "";
    nameLabel.style.fontWeight = "";
    nameLabel.style.borderColor = "";
    // Open confirmation page if successfull
    window.open("next.html");
      }
  });
