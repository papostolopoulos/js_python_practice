###Tuesday, April 17, 2018

What is a call-back?  A function that can be called/invoked inside another function.



###Tuesday March 20th
* .map, .filter, .reduce
* Functions are objects
  * From MDN: In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects. (length, name, toString(), call(), apply(), bind())
* The prototype
* Adding methods to the constructor vs the prototype
* The Execution context (creation phase and execution phase)
* Creation phase (Global Execution Context)
  * Global Object
  * this // It's a  reserved word, a variable that points at window object. Whenever we creating a new object, then 'this' is referring to a particular object.
  * Outer environment
  * Code we have written
* Execution phase // The functions being invoked creates their own 'stacks'. Once something is executed, it gets 'popped off' the 'stack'.




###Tuesday March 13th
* Object properties and methods
* Object invocation (dot and bracket)
* Literals vs the new keyword
* Operator precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
* Functions are Objects
* Function statements and function expressions
* Constructors




###Tuesday February 27th
* The Execution context (creation phase and execution phase)
* Creation phase (Global Execution Context)
  * Global Object
  * this // It's a  reserved word, a variable that points at window object. Whenever we creating a new object, then 'this' is referring to a particular object.
  * Outer environment
  * Code we have written
* Execution phase // The functions being invoked creates their own 'stacks'. Once something is executed, it gets 'popped off' the 'stack'.
* Function invocation (Invoke, call, run a function) and The execution stack
* Global Execution Context
* New Context when a function is invoked (on top of the stack)
If another function is invoked inside a function, then the function will be invoked on top of the existing stack. Then it gets popped off the stack
* Variable environment - where the variable lives - why same named variables get different values depending on the execution context they are at
* Scope chain
* let and const
* The Event Queue



### Tuesday February 20th 2018
* Explain name value pairs and objects
* How to access objects and its properties
* The global environment (execution context) - the thing that is accessible everywhere in your code. The JavaScript engine creates the following things:
  * The global object
  * The this
  * The outer environment
  * The code written by you
  * Example: An HTML page that is empty still has a “window” object created by the JavaScript engine.
* Global: not inside a function
  * Example: Define in the console a var a = 5. See how the variable can be accessed by typing a; OR window.a;  OR this.a;
* What is hoisting → Hoisting is the move of pieces of code description to the top of the code.
* Execution context phases → Two phases
  * Creation phase where the memory space for variable names and functions is created
  * Execution phase - Assignments are set
* What is the difference between a function expression and a function declaration
