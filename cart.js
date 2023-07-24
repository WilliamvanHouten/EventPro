class EventCart {
      constructor() {
        this.cartItems = [];
      }

      addToCart(eventName, price, numberOfTickets) {
        this.cartItems.push({
          eventName: eventName,
          price: price,
          numberOfTickets: numberOfTickets
        });
        this.updateCartButton();
      }

      updateCartButton() {
        const cartButton = document.getElementById("cartButton");
        const cartTotal = this.cartItems.reduce((total, item) => total + item.numberOfTickets, 0);
        cartButton.innerText = `Cart (${cartTotal})`;
      }
    }

    // Create an instance of EventCart
    const eventCart = new EventCart();

    // Function called when Buy Ticket button is clicked
    function addToCart(eventName, price, selectId) {
      const selectElement = document.getElementById(selectId);
      const numberOfTickets = parseInt(selectElement.value, 10);
      eventCart.addToCart(eventName, price * numberOfTickets, numberOfTickets);
    }
