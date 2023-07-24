function storeEventInfo(eventId) {
    let eventName = "";
    let eventPrice = 0;

    switch (eventId) {
      case 1:
        eventName = "AI and Machine Learning Webinar-Sandton Convention Centre with Takalani Madzhadzhi";
        eventPrice = 380;
        break;
      case 2:
        eventName = "Digital Marketing Webinar-Protea by Marriot Hotel-Cape Town Waterfront with Mike Saunders";
        eventPrice = 250;
        break;
      case 3:
        eventName = "Your Crafting Hands as a Business Expo-Imbizo Conference Centre-Durban (Marisa Fick-Jordan), 9 (Alex Goldberg), 10 (Annabell Lebethe)";
        eventPrice = 600;
        break;
      case 4:
        eventName = "Color and Interior Design Expo-Birchwood Hotel with Nthabi Taukobong- OR Tambo International Airport";
        eventPrice = 300;
        break;
      default:
        eventName = "Unknown Event";
        eventPrice = 0;
    }

    // Store the selected event information in localStorage
    localStorage.setItem("selectedEventName", eventName);
    localStorage.setItem("selectedEventPrice", eventPrice);
  }

// Function to parse and display event info from the URL parameters
  function displayEventInfo() {
    const eventName = localStorage.getItem("selectedEventName");
    const eventPrice = localStorage.getItem("selectedEventPrice");

    const cartItemsContainer = document.getElementById("cart-items");

    // Create elements to display event info
    const eventNameElement = document.createElement("p");
    eventNameElement.textContent = `Event Name: ${eventName}`;

    const eventPriceElement = document.createElement("p");
    eventPriceElement.textContent = `Price: R ${eventPrice}`;

    // Append event info to the cart items container
    cartItemsContainer.appendChild(eventNameElement);
    cartItemsContainer.appendChild(eventPriceElement);
  }

  // Call the displayEventInfo function on page load
  window.onload = displayEventInfo;

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

