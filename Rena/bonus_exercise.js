// Ternary Operator: expressions always
// result down to single value.

(cond ? truthy : falsy)

// Iterator examples:
[1, 2, 3][Symbol.iterator]().next();
// Separate things further - lambda extraction by actually
// creating a lambda function and passing it into 'x'.
// The [1, 2, 3][Symbol.iterator]() is being wrapped into
// lambda extraction and passed into 'x'.
 ((x) => {x.next(); x.next(); x.next(); 
    console.log(x.next())})([1, 2, 3][Symbol.iterator]());

// another example:
let name = 'Rena';
const greeting = `Hello, ${name}.`;

// Saving the template and passing it into lambda extraction:
// lambda calculus
let newGreeting = () => `Hello, ${name}`;
let name = "Adam";


// Using Generators:  It's iterating backwards
// [Symbol.iterator] - it's an iterator factory
let iterate = [1, 2][Symbol.iterator] = function*() {yield 2, yield 1};

//another generators/iterator - does not need to be invoked using ().
const arr = [1, 2, 3];
arr[Symbol.iterator] = function*() {yield 2, yield 1};
for(const item of arr) {console.log(item);}

// Iterator: It has a next() method that takes no parameters, 
// and returns an object with 2 properties:
// value: any value,
// done: boolean
//example:
return {
    value: 1,
    done: false
};

// Iterable: any JS object that has a [Symbol.iterator] property
// is a function that returns objects that satisfy the Iterator protocol.
// It's an iterator factory, such as 'for...of loop' method.


//Generator functions: A pausable function. Nothing will change in the
//internal function; it's single use.
//function* functionName(parameters 0 or more){}
//Example: This is an infinite generator, it will never have a 
//done value of true.
function idMaker(){
    let id = 0;
    while(true){
        yield id++;
    }
}

//another example: Generator Function
const idMaker = function*() { //This is the generator function.
    let id = 0;
    while(id < 10){
        yield id++;
    }
}
let idGen = idMaker();

for (const item of idGen){
    console.log(item);
}
idGen = idMaker(); //re-assign
idGen.next(); //now can use .next() method


//Generator Object: The value returned from Generator Functions. They are
//iterators and Iterables.











