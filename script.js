const userInput = document.getElementById("calcDisplayID");
const boxes = document.querySelectorAll(".box");

let resultJustCalculated = false;

const operators = ["+", "-", "*", "/", "×", "÷"];

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const value = this.dataset.value;

        if (value === "C") {
            userInput.value = "";
            resultJustCalculated = false;
            return;
        }

        else if (value === "back") {
            userInput.value = userInput.value.slice(0, -1);
            return;
        }

        else if (value === "=") {
            try {
                let result = userInput.value
                    .replace(/÷/g, "/")
                    .replace(/×/g, "*")
                    .replace(/−/g, "-");

                userInput.value = eval(result);
                resultJustCalculated = true;
            } catch {
                userInput.value = "Error";
                resultJustCalculated = true;
            }
            return;
        }

        else {
            let lastChar = userInput.value.slice(-1);

            // If result just shown
            if (resultJustCalculated) {
                if (operators.includes(value)) {
                    // continue calculation
                    resultJustCalculated = false;
                } else {
                    // new number 
                    userInput.value = "";
                    resultJustCalculated = false;
                }
            }

            // prevent multiple operators
            if (operators.includes(value)) {
                if (userInput.value === "") return;

                if (operators.includes(lastChar)) {
                    userInput.value = userInput.value.slice(0, -1);
                }
            }

            userInput.value += value;
        }
    });
});