var students = [
	{
		name: 'Evan',
		score: 94,
		isEnrolled: false
	},
	{
		name: 'Matt',
		score: 97,
		isEnrolled: true
	},
	{
		name: 'Courtney',
		score: 100,
		isEnrolled: true
	}
];

var myH1 = document.getElementById('names');
var myH2 = document.getElementById('scores');
var myH3 = document.getElementById('enrolled');


for(var i = 0; i <students.length; i++){
	myH1.innerText = myH1.innerText + students[i].name + " , ";
	myH2.innerText = myH2.innerText + students[i].score + " , ";
	myH3.innerText = myH3.innerText + students[i].isEnrolled + " , ";
}


