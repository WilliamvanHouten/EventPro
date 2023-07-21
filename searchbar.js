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
      return "<li onclick='this.selectInput(this)'>" + list + "</li>";
    });

    this.resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
  }

  selectInput(list) {
    this.inputBox.value = list.innerHTML;
    this.resultsBox.style.display = "none"; // Hide the results box after selection
  }
}

const availableKeywords = ["Paid events", "Free events"];
const eventFilter = new EventFilter(availableKeywords);
