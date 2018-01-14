//zadanie 1.
const hello = 'Hello', 
	    world = 'World';
const helloWorld = `${hello} ${world}`;
console.log(helloWorld);

//zadanie 2.
multiply = (a, b = 1) => a * b;
console.log(multiply(4,4));

//zadanie 3.
average = (...args) => args.reduce((prevArg, currentArg) => prevArg + currentArg) / args.length;
console.log(average(1, 3, 6, 6));

//zadanie 4.
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//zadanie 5.
const elements = [1, 4, 'Iwona', false, 'Nowak'];
let [,,firstName,,lastName] = elements;
console.log(`${firstName} ${lastName}`);
