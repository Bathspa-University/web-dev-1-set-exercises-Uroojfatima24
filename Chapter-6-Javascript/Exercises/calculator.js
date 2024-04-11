// Waits for the HTML content to be fully loaded before running the JavaScript.
document.addEventListener('DOMContentLoaded', function() { 
    // Find and store references to specific HTML elements (petrolCostInput, litersInput, calculateBtn, totalCostDisplay) using their IDs.
    const petrolCostInput = document.getElementById('petrolCost'); 
    const litersInput = document.getElementById('liters'); 
    const calculateBtn = document.getElementById('calculateBtn'); 
    const totalCostDisplay = document.getElementById('totalCost'); 

    // Set default values for the petrol cost and liters input fields.
    petrolCostInput.value = 1.72;
    litersInput.value = 0;

    // Define a function called calculateTotalCost that calculates the total cost based on the petrol cost and liters input, then displays the result in the totalCostDisplay element.
    function calculateTotalCost() { 
        const petrolCost = parseFloat(petrolCostInput.value); 
        const liters = parseFloat(litersInput.value); 
        const totalCost = petrolCost * liters; 
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`; 
    }

    // Attach an event listener to the calculateBtn button. When clicked, it triggers the calculateTotalCost function to update the total cost display.
    calculateBtn.addEventListener('click', calculateTotalCost);
});
