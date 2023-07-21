
class EventFilter {
  constructor(availableKeywords) {
    this.availableKeywords = availableKeywords;
    this.resultsBox = document.querySelector(".result-box");
    this.inputBox = document.getElementById("input-box");
    this.inputBox.addEventListener("keyup", this.handleInput.bind(this));
    this.resultsBox.style.display = "none"; // Hide the results box initially

    // Add a click event listener to the resultsBox to handle clicks on keywords
    this.resultsBox.addEventListener("click", this.handleResultClick.bind(this));
  }

  // ... other methods ...

  display(results) {
    const content = results.map(list => {
      return `<li><a href="#${list.toLowerCase().replace(/\s/g, "-")}">${list}</a></li>`;
    });

    this.resultsBox.innerHTML = `<ul>${content.join("")}</ul>`;
  }

  handleResultClick(event) {
    const clickedKeyword = event.target.textContent;
    this.inputBox.value = clickedKeyword;
    this.resultsBox.style.display = "none"; // Hide the results box after selection
  }

  // ... other methods ...
}
