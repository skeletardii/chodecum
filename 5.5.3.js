function sortNums() {
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



    console.log("Original array: " + numbers.join(","));
    numbers.sort(function(a, b){return a - b});
    console.log("Sorted array: " +  numbers);
}
sortNums();
