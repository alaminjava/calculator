<<<<<<< HEAD
const userInput = document.getElementById("calcDisplayID");
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const value = this.dataset.value;

        if (value === "C") {
            userInput.value = "";
        }

        else if (value === "back") {
            userInput.value = userInput.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                let result = userInput.value
                    .replace(/÷/g, "/")
                    .replace(/×/g, "*")
                    .replace(/−/g, "-");

                userInput.value = eval(result);
            } catch {
                userInput.value = "Error";
            }
        }

        else {
            userInput.value += value;
        }
    });
});
=======
const userInput = document.getElementById("calcDisplayID");
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const value = this.dataset.value;

        if (value === "C") {
            userInput.value = "";
        }

        else if (value === "back") {
            userInput.value = userInput.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                let result = userInput.value
                    .replace(/÷/g, "/")
                    .replace(/×/g, "*")
                    .replace(/−/g, "-");

                userInput.value = eval(result);
            } catch {
                userInput.value = "Error";
            }
        }

        else {
            userInput.value += value;
        }
    });
});
>>>>>>> 74adefa (update)
