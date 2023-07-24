// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = []; // To store selected events and prices

  // Function to display cart items on the cart page
  function displayCartItems() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ""; // Clear the previous content

    if (cartItems.length === 0) {
      cartItemsDiv.innerHTML = "<p>No items in the cart.</p>";
    } else {
      cartItems.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<p><strong>Event:</strong> ${item.eventName}</p><p><strong>Price:</strong> R${item.eventPrice}</p><hr>`;
        cartItemsDiv.appendChild(itemDiv);
      });
    }
  }

  // Function to handle "Buy Ticket" button click event for paid events
  function handleBuyTicketClick(event) {
    const pricingBox = event.target.closest(".pricing-box");
    const eventName = pricingBox.querySelector(".pricing-title h3").textContent;
    const eventPrice = pricingBox.querySelector(".pricing-price").textContent;

    cartItems.push({ eventName, eventPrice });
    displayCartItems();
  }

  // Function to handle "Book a Seat" button click event for free events
  function handleBookSeatClick(event) {
    const pricingBox = event.target.closest(".pricing-box");
    const eventName = pricingBox.querySelector(".pricing-title h3").textContent;
    const eventPrice = pricingBox.querySelector(".pricing-price").textContent;

    cartItems.push({ eventName, eventPrice });
    displayCartItems();
  }

  // Attach event listeners to the "Buy Ticket" buttons for each paid event
  document.querySelectorAll("#paid-events .pricing-action a.button").forEach((button) => {
    button.addEventListener("click", handleBuyTicketClick);
  });

  // Attach event listeners to the "Book a Seat" buttons for each free event
  document.querySelectorAll("#free-events .pricing-action a.button").forEach((button) => {
    button.addEventListener("click", handleBookSeatClick);
  });
});

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

