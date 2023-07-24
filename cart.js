 // Event class to represent an event with its name and price
  class Event {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  // EventData class to manage event data and store the selected event in localStorage
  class EventData {
    static getEvents() {
      // Return an array of Event objects with event information
      return [
        new Event(1, "AI and Machine Learning Webinar-Sandton Convention Centre with Takalani Madzhadzhi", 380),
        new Event(2, "Digital Marketing Webinar-Protea by Marriot Hotel-Cape Town Waterfront with Mike Saunders", 250),
        new Event(3, "Your Crafting Hands as a Business Expo-Imbizo Conference Centre-Durban (Marisa Fick-Jordan), 9 (Alex Goldberg), 10 (Annabell Lebethe)", 600),
        new Event(4, "Color and Interior Design Expo-Birchwood Hotel with Nthabi Taukobong- OR Tambo International Airport", 300),
      ];
    }

    static storeEventInfo(eventId) {
      // Get the selected event data based on eventId using arrow functions
      const selectedEvent = this.getEvents().find(event => event.id === eventId);

      // Store the selected event information in localStorage
      localStorage.setItem("selectedEventName", selectedEvent.name);
      localStorage.setItem("selectedEventPrice", selectedEvent.price);
    }
  }

  // PaymentForm class to handle the payment form functionality
  class PaymentForm {
    constructor() {
      this.cardNumberInput = document.getElementById('cardno');
      this.validTillInput = document.getElementById('validtill');
      this.cardholderInput = document.getElementById('cardholder');
      this.payButton = document.getElementById('payButton');
      this.form = document.getElementById('paymentForm');
      this.confirmationModal = new ConfirmationModal();

      this.initEventListeners();
    }

    initEventListeners() {
      this.cardNumberInput.addEventListener('input', () => this.formatCardNumber());
      this.validTillInput.addEventListener('input', () => this.formatExpirationDate());
      this.cardholderInput.addEventListener('input', () => this.validateCardholderName());
      this.form.addEventListener('input', () => this.togglePaymentButton());
      this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    formatCardNumber() {
      let cardNumberValue = this.cardNumberInput.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let formattedCardNumber = '';

      if (cardNumberValue.length > 0) {
        formattedCardNumber = cardNumberValue.match(/.{1,4}/g).join(' ');
      }

      this.cardNumberInput.value = formattedCardNumber;
    }

    formatExpirationDate() {
      let validTillValue = this.validTillInput.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let formattedValidTill = '';

      if (validTillValue.length > 0) {
        formattedValidTill = validTillValue.match(/.{1,2}/g).join('/');
      }

      this.validTillInput.value = formattedValidTill;
    }

    validateCardholderName() {
      let cardholderValue = this.cardholderInput.value.trim();
      let cardholderRegex = /^[a-zA-Z\s]+$/;

      if (!cardholderRegex.test(cardholderValue)) {
        this.cardholderInput.classList.add('is-invalid');
      } else {
        this.cardholderInput.classList.remove('is-invalid');
      }
    }

    validateForm() {
      if (this.form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.form.classList.add('was-validated');
      return this.form.checkValidity();
    }

    togglePaymentButton() {
      let isValid = this.validateForm();
      this.payButton.disabled = !isValid;
    }

    handleSubmit(event) {
      if (this.validateForm()) {
        event.preventDefault();
        this.showConfirmationModal();
      }
    }

    showConfirmationModal() {
      this.confirmationModal.show();
    }
  }

  // ConfirmationModal class to handle the confirmation modal functionality
  class ConfirmationModal {
    constructor() {
      this.modalElement = document.getElementById('confirmationModal');
    }

    show() {
      $(this.modalElement).modal('show');
    }

    hide() {
      $(this.modalElement).modal('hide');
    }
  }

  // Display event info on page load
  function displayEventInfo() {
    const eventName = localStorage.getItem("selectedEventName");
    const eventPrice = localStorage.getItem("selectedEventPrice");

    const cartItemsContainer = document.getElementById("cart-items");

    const eventNameElement = document.createElement("p");
    eventNameElement.textContent = `Event Name: ${eventName}`;

    const eventPriceElement = document.createElement("p");
    eventPriceElement.textContent = `Price: R ${eventPrice}`;

    cartItemsContainer.appendChild(eventNameElement);
    cartItemsContainer.appendChild(eventPriceElement);
  }

  // Call the displayEventInfo function on page load
  window.onload = displayEventInfo;

  // Event Listeners
  document.getElementById('cardno').addEventListener('input', () => paymentForm.formatCardNumber());
  document.getElementById('validtill').addEventListener('input', () => paymentForm.formatExpirationDate());
  document.getElementById('cardholder').addEventListener('input', () => paymentForm.validateCardholderName());

  const paymentForm = new PaymentForm();

