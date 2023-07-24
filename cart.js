// Define the EventCart class
    class EventCart {
      constructor() {
        this.cart = [];
      }

      addToCart(event, quantity) {
        this.cart.push({ event, quantity });
        this.updateCartUI();
      }

      updateCartUI() {
        // Update the cart UI here
        // This function will be responsible for showing the current items in the cart and their quantities on the page
        // You can use DOM manipulation to achieve this
      }
    }

    // Create an instance of the EventCart class
    const eventCart = new EventCart();

    // Function to handle buy/booking button click
    function handleButtonClick(event, quantity, isPaidEvent) {
      // Check if the event is a paid event or a free event
      if (isPaidEvent) {
        // Perform the logic for paid events here
        // Calculate the total amount based on the event price and quantity
        const totalPrice = event.price * quantity;
        // Add the event and quantity to the cart
        eventCart.addToCart(event.name, quantity);
        // Display a confirmation or update the UI to show the total price and quantity added to the cart
      } else {
        // Perform the logic for free events here
        // Add the event and quantity to the cart
        eventCart.addToCart(event.name, quantity);
        // Display a confirmation or update the UI to show the quantity added to the cart
      }
    }

    // Function to handle the buy ticket button click
    function handleBuyTicket(event) {
      // Find the selected event and quantity from the DOM
      const selectedEvent = event.target.closest('.pricing-box');
      const eventName = selectedEvent.querySelector('.pricing-title h3').textContent;
      const quantitySelect = selectedEvent.querySelector('.pricing-persons select');
      const quantity = parseInt(quantitySelect.value);

      // For paid events, you should have a way to get the price of the event from the DOM
      const price = ... // Get the price of the event from the DOM

      // Create an object representing the selected event
      const selectedPaidEvent = {
        name: eventName,
        price: price,
      };

      // Call the handleButtonClick function with the necessary arguments
      handleButtonClick(selectedPaidEvent, quantity, true);
    }

    // Function to handle the book seat button click for free events
    function handleBookSeat(event) {
      // Find the selected event and quantity from the DOM
      const selectedEvent = event.target.closest('.pricing-box');
      const eventName = selectedEvent.querySelector('.pricing-title h3').textContent;
      const quantitySelect = selectedEvent.querySelector('.pricing-persons select');
      const quantity = parseInt(quantitySelect.value);

      // Create an object representing the selected event
      const selectedFreeEvent = {
        name: eventName,
      };

      // Call the handleButtonClick function with the necessary arguments
      handleButtonClick(selectedFreeEvent, quantity, false);
    }

    // Add event listeners to Buy Ticket buttons
    const buyTicketButtons = document.querySelectorAll('#paid-events .pricing-box .pricing-action a');
    buyTicketButtons.forEach(button => {
      button.addEventListener('click', handleBuyTicket);
    });

    // Add event listeners to Book Seat buttons for free events
    const bookSeatButtons = document.querySelectorAll('#free-events .pricing-box .pricing-action a');
    bookSeatButtons.forEach(button => {
      button.addEventListener('click', handleBookSeat);
    });
  
