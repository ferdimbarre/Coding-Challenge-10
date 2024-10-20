const priceElement = document.getElementById("product-price");
const sizeElement = document.getElementById("size-selector");

sizeElement.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`
} ) //the html file had added selector for price and sizes, and the js file is going to update according to selection