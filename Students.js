
var student1 = {name: 'Stomat', year:3};
var student2 = {name: 'Medical', year:5};
var student3 = {name: 'Farmacy', year:4};
var student4 = {name: 'Farmacy', year:3};
var student5 = {name: 'Medical', year:6};
var student6 = {name: 'Stomat', year:2};
var student7 = {name: 'Stomat', year:3};
var student8 = {name: 'Medical', year:6};
var student9 = {name: 'Stomat', year:1};
var student10 = {name: 'Farmacy', year:5};
var students = [];
 students.push(student1, student2, student3,student4,student5,student6,student7,student8,student9,student10);

console.log(students);

function getFacultyName(student) {
    return student.name;
}

let listOfFaculties = students.map(getFacultyName);
console.log(listOfFaculties);

function sumStudentsYearsOfStudying(sumYearsOfStudying, startNumber) {
    return sumYearsOfStudying + startNumber.year;
}

let sumYearsStud = students.reduce(sumStudentsYearsOfStudying, 0);
console.log(sumYearsStud);
