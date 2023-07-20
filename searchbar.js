
    class EventFilter {
      constructor(availableKeywords) {
        this.availableKeywords = availableKeywords;
        this.resultsBox = document.querySelector(".result-box");
        this.inputBox = document.getElementById("input-box");
        this.inputBox.addEventListener("keyup", this.handleInput.bind(this));
      }

      handleInput() {
        let input = this.inputBox.value;
        let result = [];
        if (input.length) {
          result = this.availableKeywords.filter(keyword => {
            return keyword.toLowerCase().includes(input.toLowerCase());
          });
        }
        this.display(result);
      }

      display(results) {
        const content = results.map(list => {
          return "<li onclick='this.selectInput(this)'>" + list + "</li>";
        });

        this.resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
      }

      selectInput(list) {
        this.inputBox.value = list.innerHTML;
        this.resultsBox.innerHTML = "";
      }
    }

    const availableKeywords = ["Paid events", "Free events"];
    const eventFilter = new EventFilter(availableKeywords);


