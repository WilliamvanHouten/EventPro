function addToCart(eventTitle, eventPrice) {
    const cartContent = document.getElementById('cart-content');

    // Create a new div element to hold the event information
    const eventInfo = document.createElement('div');
    eventInfo.classList.add('event-info');

    // Add the event title and price to the eventInfo div
    const titleElement = document.createElement('h2');
    titleElement.innerText = eventTitle;

    const priceElement = document.createElement('p');
    priceElement.innerText = 'Price: ' + eventPrice;

    eventInfo.appendChild(titleElement);
    eventInfo.appendChild(priceElement);

    // Append the eventInfo to the cartContent div
    cartContent.appendChild(eventInfo);
  }

  // Add event listeners to Buy Ticket buttons
  const buyTicketButtons = document.querySelectorAll('.pricing-action button');
  buyTicketButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const eventTitle = this.parentNode.parentNode.querySelector('.pricing-title h3').innerText;
      const eventPrice = this.parentNode.parentNode.querySelector('.pricing-price').innerText;
      addToCart(eventTitle, eventPrice);
    });
  });

  // Add event listeners to Book a Seat buttons
  const bookSeatButtons = document.querySelectorAll('.pricing-action button');
  bookSeatButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const eventTitle = this.parentNode.parentNode.querySelector('.pricing-title h3').innerText;
      const eventPrice = this.parentNode.parentNode.querySelector('.pricing-price').innerText;
      addToCart(eventTitle, eventPrice);
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

