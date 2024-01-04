function numberMultiplier() {
    const numbers = [];

    while (true) {
        let userInput = prompt('Enter a number (or "q" to quit): ');

        if (userInput.toLowerCase() === 'q') {
            break;
        }

        let number = parseFloat(userInput);

        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert('Invalid input. Please enter a valid number or "q" to quit.');
        }
    }

    const doubledArray = numbers.map(function (num) {
        return num * 2;
    });

    console.log("Original array: " + numbers.join(","));
    console.log("Doubled array: " + doubledArray.join(","));
}
numberMultiplier();
