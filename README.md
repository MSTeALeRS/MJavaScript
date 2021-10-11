Lesson-5


Task
Мінімум:
1. Реалізувати стрічковий буфер використовуючи функцію з наступним синтаксисом: 

Об'єкт буфера:
var buffer = makeBuffer();


Виклик makeBuffer повинен повертати таку функцію buffer, яка при виклику buffer(value) додасть значення в деяке внутрішнє сховище, а при виклику без аргументів buffer() - поверне всі значення сховища.
Ось приклад:
function makeBuffer(){/ * ваш код * /}
var buffer = makeBuffer();

// додати значення до буферу
buffer.add( 'JavaScript');
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');

// отримати поточне значення
console.log(buffer.print());
// JavaScript Вчити Потрібно!


Буфер повинен перетворювати всі дані до стрічкового типу:
var buffer = makeBuffer ();
buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log (buffer.print()); // '010'

Максимум:
2. Реалізуйте метод buffer.clear(), який буде очищати поточний вміст буфера:

function makeBuffer () {
   ... ваш код ...
}

var buffer = makeBuffer ();

buffer.add("Тест");
buffer.add("тебе не з'їсть");
alert(buffer.print()); // Тест тебе не з'їсть
buffer.clear ();
alert (buffer.print()); // "" 
