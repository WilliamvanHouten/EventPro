
class EventFilter {
  constructor(availableKeywords) {
    this.availableKeywords = availableKeywords;
    this.resultsBox = document.querySelector(".result-box");
    this.inputBox = document.getElementById("input-box");
    this.inputBox.addEventListener("keyup", this.handleInput.bind(this));
    this.resultsBox.style.display = "none"; // Hide the results box initially
  }

  handleInput() {
    let input = this.inputBox.value;
    let result = [];
    if (input.length) {
      result = this.availableKeywords.filter(keyword => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
    }

    // Show or hide the results box based on the presence of filtered results
    if (result.length > 0) {
      this.display(result);
      this.resultsBox.style.display = "block";
    } else {
      this.resultsBox.style.display = "none";
    }
  }

  display(results) {
    const content = results.map(list => {
      return `<li><a href="#${list.toLowerCase().replace(/\s/g, "-")}">${list}</a></li>`;
    });

    this.resultsBox.innerHTML = `<ul>${content.join("")}</ul>`;
  }

  selectInput(list) {
    this.inputBox.value = list.innerHTML;
    this.resultsBox.style.display = "none"; // Hide the results box after selection
  }
}

const availableKeywords = ["Paid events", "Free events"];
const eventFilter = new EventFilter(availableKeywords);

// Add a click event listener to the resultsBox to handle clicks on keywords
eventFilter.resultsBox.addEventListener("click", event => {
  if (event.target.tagName === "A") {
    event.preventDefault(); // Prevent the default anchor link behavior
    const clickedKeyword = event.target.textContent;
    eventFilter.inputBox.value = clickedKeyword;
    eventFilter.resultsBox.style.display = "none"; // Hide the results box after selection
    const sectionId = clickedKeyword.toLowerCase().replace(/\s/g, "-");
    scrollToSection(sectionId); // Scroll to the designated section
  }
});

// Function to scroll to the designated section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerOffset = 100; // Adjust this value based on your header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

