// Create a TicketPurchase class
class TicketPurchase {
    constructor() {
        this.eventName = '';
        this.pricing = 0;
        this.numTickets = 0;
    }

    updateEventDetails(eventName, pricing, numTickets) {
        this.eventName = eventName;
        this.pricing = pricing;
        this.numTickets = numTickets;
    }

    addToCart() {
        const cartButton = document.getElementById('cartButton');
        const cartAmount = this.numTickets * this.pricing;

        // Update the cart button with the correct amount of tickets
        cartButton.innerText = `Cart (${this.numTickets} Ticket(s) - R${cartAmount})`;

        // Save the event details to local storage or any other method you prefer
        localStorage.setItem('eventDetails', JSON.stringify({
            eventName: this.eventName,
            pricing: this.pricing,
            numTickets: this.numTickets,
            cartAmount: cartAmount
        }));
    }
}

// Function to handle Buy Ticket button click
function addToCart() {
    const eventName = "AI and Machine Learning Webinar-Sandton Convention Centre with Takalani Madzhadzhi";
    const pricing = 380;
    const numTicketsSelect = document.getElementById('early-bird-person');
    const numTickets = parseInt(numTicketsSelect.value, 10);

    // Create a TicketPurchase object
    const ticketPurchase = new TicketPurchase();

    // Update event details and add to cart
    ticketPurchase.updateEventDetails(eventName, pricing, numTickets);
    ticketPurchase.addToCart();

    // Redirect to payment form page
    window.location.href = "paymentform.html";
}
