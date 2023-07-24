// Function to handle the "Buy Ticket" button click
  function handleButtonClick(event) {
    const selectedEvent = event.target.dataset.event; // Get the selected event details from the data-event attribute
    const selectedQuantity = parseInt(document.getElementById(`early-bird-person`).value); // Get the selected quantity
    const totalPrice = calculateTotalPrice(selectedEvent, selectedQuantity);

    // Create a new item with the selected event details and add it to the cart
    const newItem = {
      event: selectedEvent,
      quantity: selectedQuantity,
      price: totalPrice,
    };

    // Retrieve existing cart items from localStorage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new item to the cart
    cartItems.push(newItem);

    // Save the updated cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Display success message
    const successMessage = document.getElementById(`success-message-${selectedEvent}`);
    successMessage.innerText = `Added ${selectedQuantity} ticket(s) to the cart.`;
    successMessage.classList.add("text-success");

    // Reset quantity input
    document.getElementById(`early-bird-person`).value = 1;

    // Update the cart button
    updateCartButton();
  }

  // Function to calculate the total price for the selected event and quantity
  function calculateTotalPrice(event, quantity) {
    // You can add the logic here to calculate the total price based on the event and quantity
    // For now, let's assume the price is hardcoded in the data-event attribute
    const eventPrice = parseFloat(document.getElementById(`early-bird-person`).dataset.price);
    return eventPrice * quantity;
  }

  // Function to update the cart button with the total number of items in the cart
  function updateCartButton() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartButton = document.getElementById("cart-button");
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartButton.innerText = `Cart (${cartCount})`;
  }

  // Call the updateCartButton function when the page loads
  window.onload = function () {
    updateCartButton();
  };

// Format Card Number
        function formatCardNumber() {
            let cardNumberInput = document.getElementById('cardno');
            let cardNumberValue = cardNumberInput.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedCardNumber = '';

            if (cardNumberValue.length > 0) {
                formattedCardNumber = cardNumberValue.match(/.{1,4}/g).join(' ');
            }

            cardNumberInput.value = formattedCardNumber;
        }

        // Format Expiration Date
        function formatExpirationDate() {
            let validTillInput = document.getElementById('validtill');
            let validTillValue = validTillInput.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValidTill = '';

            if (validTillValue.length > 0) {
                formattedValidTill = validTillValue.match(/.{1,2}/g).join('/');
            }

            validTillInput.value = formattedValidTill;
        }

        // Validate Cardholder Name
        function validateCardholderName() {
            let cardholderInput = document.getElementById('cardholder');
            let cardholderValue = cardholderInput.value.trim();
            let cardholderRegex = /^[a-zA-Z\s]+$/;

            if (!cardholderRegex.test(cardholderValue)) {
                cardholderInput.classList.add('is-invalid');
            } else {
                cardholderInput.classList.remove('is-invalid');
            }
        }

        // Validate Form
        function validateForm() {
            let form = document.getElementById('paymentForm');
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            return form.checkValidity();
        }

        // Enable/Disable Payment Button
        function togglePaymentButton() {
            let payButton = document.getElementById('payButton');
            let isValid = validateForm();
            payButton.disabled = !isValid;
        }

        // Show Confirmation Modal
        function showConfirmationModal() {
            $('#confirmationModal').modal('show');
        }

        // Close Confirmation Modal
        function closeConfirmationModal() {
            $('#confirmationModal').modal('hide');
        }

        // Event Listeners
        document.getElementById('cardno').addEventListener('input', formatCardNumber);
        document.getElementById('validtill').addEventListener('input', formatExpirationDate);
        document.getElementById('cardholder').addEventListener('input', validateCardholderName);
        document.getElementById('paymentForm').addEventListener('input', togglePaymentButton);
        document.getElementById('paymentForm').addEventListener('submit', function (event) {
            if (validateForm()) {
                event.preventDefault();
                showConfirmationModal();
            }
        });

