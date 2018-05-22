//------------------------------------//
//            Week 4 Day 1            //
//------------------------------------//

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier.

Examples:  // ["This element is 1", "This element is 2", "This element is 3"] //return value

>
******************************************************************************/


/******************************************************************************
1) Write a function passingStudents(array)
2) that accepts an array of student objects.
3) It should iterate through the list of students and
4) return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
******************************************************************************/

var students = [
  {"name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {"name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];

// console.log(students[1].grades[2].score);

function passingStudents(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++){
    console.log(array[i].grades);
    if (avg(array[i].grades[0].score, array[i].grades[1].score, array[i].grades[2].score) >= 70) {
      newArray.push(students[i].name);
    }
  }
}
passingStudents(students);


function avg(num1, num2, num3){
  return (num1+num2+num3)/3;
}



//Another alternative solution: ES06

function passingStudents(students){
  var endArr = [];

  students.forEach((el, idx, arr) =>{
    var scores = 0;
    for(var i = 0; i < el.grades.length; i++){
      scores += el.grades[i].score;
    }
    if(scores/3 >= 70){
      endArr.push(el.name);
    }
  });
  return endArr;
}
passingStudents(students);


// Other ES06 alternative solutions:

function passingStudents(array){
  return array.filter(el=>(el.grades[0].score+el.grades[1].score+el.grades[2].score)/3 >= 70).map(ele=>ele.name);
}


const passingStudents = array =>array.filter(el=>(el.grades[0].score+el.grades[1].score+el.grades[2].score)/3 >= 70).map(ele=>ele.name);

/******************************************************************************
Write a function laligatSequence(base, n)
A number's laligat sum is the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence
*******************************************************************************/
