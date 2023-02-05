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
let locationEl = document.createElement("p");
let locationText = document.createTextNode(`${customer.location}`)
locationEl.appendChild(locationText);
newElement.appendChild(locationEl);

// create DOB
// let locationEl = document.createElement("p");
// let locationText = document.createTextNode(`${customer.location}`)
// locationEl.appendChild(locationText);
// newElement.appendChild(locationEl);

// create registration date 


// move towards end after
directory.appendChild(newElement);
// move towards end after 
}