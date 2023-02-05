console.log('linked');

const directory = document.querySelector("#customer-directory");
// created variable to capture the large div containing the entier customer directory
// as established in customer.js file, the array(list) of customers is called "customers"



for (let itemInArray of customers) {
    buildCustomerHtml(itemInArray);
        // "itemInArray" doesnt mean anything 
        // starting a loop, and in loop I'm calling a function
    }

//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// everything below this line is inside the loop because calling the function by name (above) means
function buildCustomerHtml(customer) {
    // here we are defining the function
    // create div(box) for each customer to hold name, img, all info
let newElement = document.createElement("div");
let nameEl = document.createElement("h2");
let text = document.createTextNode(`${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`)
nameEl.appendChild(text);
newElement.appendChild(nameEl);

// create thumbnail picture
let thumbEl = document.createElement("img");
thumbEl.src = (`${customer.picture.large}`);
thumbEl.classList.add("thumbnail");
newElement.appendChild(thumbEl);

// create email
let emailEl = document.createElement("p");
let emailText = document.createTextNode(`${customer.email}`)
emailEl.appendChild(emailText);
newElement.appendChild(emailEl);

// create phone number
let phoneEl = document.createElement("p");
let phoneText = document.createTextNode(`${customer.phone}`)
phoneEl.appendChild(phoneText);
newElement.appendChild(phoneEl);

// create address
// let locationEl = document.createElement("p");
// locationEl.classList.add("location");
// let locationText = document.createTextNode(`${customer.location.street.number} ${customer.street.name}`);
// locationEl.appendChild(locationText);
// newElement.appendChild(locationEl);

// let cityStateEl = document.createElement("p");
// cityStateEl.classList.add("location-zip");
// let cityStateText = document.createTextNode(`${customer.location.city} ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`);
// cityStateEl.appendChild(cityStateText);
// newElement.appendChild(cityStateEl);

// create DOB
// let dobEl = document.createElement("p");
// dobEl.classList.add("dob");
// // let dobFormat = moment(customer.dob.date).format("MMM Do YYYY");
// // let dobText = document.createTextNode(`DOB: ${dobFormat}`);
// dobEl.appendChild(dobText);
// newElement.appendChild(dobEl);

// create registration date 


// move towards end after
directory.appendChild(newElement);
// move towards end after 
}