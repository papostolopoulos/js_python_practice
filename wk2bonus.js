function Person(name, address) {
  this.name = name || "No entry";
  this.address = address || "No entry";
  this.sayHi = function(){
    return "Hello, I'm " + this.name;
  };
}


var mo = new Person("Mohammed", "999 Second Av");
var rena = new Person("Rena", "111 Main St");
var paris = new Person();



