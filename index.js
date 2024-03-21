
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer in global scope
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

// Function to try to change leastFavoriteCustomer (will throw an error)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else';
}

// Example usage
console.log(customerName); // Output: 'bob'
lowerCaseCustomerName();
console.log(customerName); // Output: 'BOB'
setBestCustomer();
console.log(bestCustomer); // Output: 'not bob'
overwriteBestCustomer();
console.log(bestCustomer); // Output: 'maybe bob'
console.log(leastFavoriteCustomer); // Output: 'someone'