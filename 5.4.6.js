function smallestOdd() {
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

    const oddNumbers = numbers.filter(function (num) {
        return num % 2 === 1;
    });
    console.log("The smallest odd number is: " + Math.min(...oddNumbers));
}

smallestOdd();