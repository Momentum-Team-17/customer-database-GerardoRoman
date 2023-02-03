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
let emailEl = document.createElement("p");
let emailText = document.createTextNode(`${customer.email}`)
emailEl.appendChild(emailText);
newElement.appendChild(emailEl);
directory.appendChild(newElement);
}