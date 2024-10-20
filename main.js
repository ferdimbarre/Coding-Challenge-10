
const priceElement = document.getElementById("product-price");
const sizeElement = document.getElementById("size-selector");
const inventoryCount = document.getElementById("stock-count");
const buyNowButton = document.getElementById("buy-now"); //this part of the code retrieves the info from the html so that i can use it here 

//this is so that the price is updated according to the size selection
sizeElement.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`
 //the html file had added selector for price and sizes, and the js file is going to update according to selection
// Get the selected size and update inventory
const selectedSize = event.target.options[event.target.selectedIndex].text.split(" ")[2][0];
handleInventory(selectedSize);  // Call handleInventory based on size selection
});


const stockBySize = {
small: 10, 
medium: 5,
large: 0
}; // this is using an object to simulate stock availability 

function handleInventory(size){
const stock = stockBySize[size]//this will allow me to do an if statement using stock as a single thing by inputting the selected size 
    if (stock < 11) {
        buyNowButton.disabled = false //this will allow the user to click on the button
        inventoryCount.textContent = `In Stock: ${stock}`;
    }
    else {
        buyNowButton.disabled = true  //this will make sure the button is disabled when item is out of stock
        inventoryCount.textContent = "We are sorry, that item is currently out of stock"
    }
}; 

buyNowButton.addEventListener("click", () => {
    const selectedSize = sizeElement.options[sizeElement.selectedIndex].text.split(" ")[0]; // Ensure selectedSize is defined
    stockBySize[selectedSize]--;  // decreases stock
    handleInventory(selectedSize); // updates inventory 
    alert (`Thank you for your purchase`) // this creates the checkout event
}) //this function makes sure inventory is updated when purchase is made 