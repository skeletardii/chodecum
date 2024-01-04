function calculateProductAndSum() {
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

    const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const difference = product - sum;

    console.log(`Product - Sum = ${difference}`);
}

calculateProductAndSum();
