function numberDoubleSum() {
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

    var sum=0;
    for(let x of numbers){
        sum+=x;
    }
    sum*=2;

    console.log("The sum of the doubled numbers is: " + sum);
}
numberDoubleSum();
