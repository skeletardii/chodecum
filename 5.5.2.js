function filterEvenNumbers() {
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

    const evenNumbers = numbers.filter(function (num) {
        return num % 2 === 0;
    });

    console.log("Original array: " + numbers.join(","));
    console.log("Even numbers: " + evenNumbers.join(","));
}

filterEvenNumbers();
