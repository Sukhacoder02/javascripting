let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(number) {
    return number%2 == 0;
}

numbers = numbers.filter(filter);
console.log(numbers);
