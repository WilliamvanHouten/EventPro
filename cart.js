// CartButton class representing the cart button with ticket count
  class CartButton {
    constructor(element) {
      this.element = element;
      this.ticketCount = 0;
      this.updateTicketCount();
      this.addClickEvent();
    }

    updateTicketCount() {
      this.element.innerHTML = `<div>Cart (${this.ticketCount} Tickets)</div>`;
    }

    addClickEvent() {
      this.element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        // Increment the ticket count and update the text
        this.ticketCount++;
        this.updateTicketCount();
      });
    }
  }

  // Initialize the cart button with ticket count functionality
  const cartButtonElement = document.getElementById('cart-button');
  const cartButton = new CartButton(cartButtonElement);

// Event class representing each paid or free event
class Event {
    constructor(name, date, price) {
      this.name = name;
      this.date = date;
      this.price = price;
      this.persons = 1; // Default to 1 person
    }
  
    calculateTotal() {
      return this.price * this.persons;
    }
  
    generateHTML() {
      return `
        <div class="event-item">
          <p>${this.name} - ${this.date}</p>
          <p>Price: R ${this.price}</p>
          <p>Persons: ${this.persons}</p>
        </div>
      `;
    }
  }
  
  // Cart class to handle the events added to the cart
  class Cart {
    constructor() {
      this.events = [];
    }
  
    addEvent(event) {
      this.events.push(event);
    }
  
    removeEvent(event) {
      // Implement remove event logic
    }
  
    calculateTotalAmount() {
      let total = 0;
      for (const event of this.events) {
        total += event.calculateTotal();
      }
      return total;
    }
  
    generateHTML() {
      let cartHTML = '';
      for (const event of this.events) {
        cartHTML += event.generateHTML();
      }
      return cartHTML;
    }
  }
  
  // Function to handle the button click event
  function handleButtonClick(event) {
    event.preventDefault();
    const eventId = event.target.getAttribute('data-event-id');
    const selectedEvent = events[eventId];
    cart.addEvent(selectedEvent);
    updateCartHTML();
  }
  
  // Function to update the cart HTML and total amount
  function updateCartHTML() {
    const cartHTML = cart.generateHTML();
    const totalAmount = cart.calculateTotalAmount();
  
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = cartHTML;
  
    const payButton = document.getElementById('payButton');
    payButton.textContent = `Pay R ${totalAmount.toFixed(2)}`;
  }
  
  // Event instances for the paid and free events
  const event1 = new Event(
    "AI and Machine Learning Webinar-Sandton Convention Centre with Takalani Madzhadzhi",
    "19 August 2023",
    380
  );
  const event2 = new Event(
    "Digital Marketing Webinar-Protea by Marriot Hotel-Cape Town Waterfront with Mike Saunders",
    "2nd September 2023",
    250
  );
  // Add more event instances for the other events...
  
  // Add event instances to an array for easy access
  const events = [event1, event2];
  
  // Create a cart instance to store selected events
  const cart = new Cart();
  
  // Add event listeners to the "Buy Ticket" and "Book a seat" buttons
  const buyButtons = document.querySelectorAll('.button');
  buyButtons.forEach((button, index) => {
    button.setAttribute('data-event-id', index);
    button.addEventListener('click', handleButtonClick);
  });
  
