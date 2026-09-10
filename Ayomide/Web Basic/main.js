console.log("Hello, World!");
// alert("Welcome to JavaScript programming!");

const stringValue = "HELLOOO";
const numberValue = 42;
const booleanValue = true;
const floatValue = 3.14;
const nullValue = null;
const undefinedValue = undefined;

console.log(typeof stringValue);
console.log(typeof numberValue);
console.log(typeof booleanValue);
console.log(typeof floatValue);
console.log(typeof nullValue);

if (!!stringValue) {
  console.log("The string value is truthy.");
}

if (!!stringValue) {
  console.log("The string value is truthy.");
}

const name = "Ayomide";

// const greeting = "Hello, " + name + "! Welcome to JavaScript programming.";

// const greetingTemplate = `Hello, ${name}! Welcome to JavaScript programming.`;
// console.log(greeting);
// console.log(greetingTemplate);

function greeting(name, age, address) {
  console.log(
    `Hello, ${name}! You are ${age} years old and live at ${address}.`,
  );
}

const greetingAFn = ({ name }) => {
  console.log(`Hello, ${name}!`);
};

greeting("Ayomide", "123 Main St", 25);
greetingAFn("Ayomide");

let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  case "Thursday":
    console.log("It's Thursday!");
    break;
  default:
    console.log("It's another day of the week!");
}

// for (let a = 0; a <= 30; a++){
//   console.log(a);
// }

// let b = 100;
// while (b > 0){
//   console.log(b);
//   b--;
// }

const items = ["Apple", "Banana", "Mango"];

// console.log(items)

// for (let item of items) {
//   console.log(item);
// }

// items.forEach((item)=> {
//   console.log("This is one of the items in the array: " + item);
// })

const numbers = [1, 2, 3, 4, 5];

numbers[0]; //us to access first posiion
numbers[1]; //us to access second posiion
const index = numbers[numbers.length - 1];
const lastElement = numbers.at(-1);
const secondLastElement = numbers.at(-2);

// console.log(index)
// console.log(lastElement)
// console.log(secondLastElement)

const fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange"); // Adding an element to the end of the array
// fruits.pop()
// fruits.unshift("Strawberry"); // Adding an element to the beginning of the array
// fruits.shift() // Removing the first element from the array
// fruits.splice(1, 1); // Removing an element at index 1 first valus is your start count(work with index) and second value is how many you want to remove
fruits.splice(3, 0, "Grapes", "Pineapple", "Watermelon"); // Adding an element at index 2

console.log(fruits); // Accessing the first element

const todos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Read a book", completed: false },
];

const todoId = 2;

// const result = todos.find(todo => todo.id === 2)

// const update = (id) => {
//   const result = todos.find((todo) => todo.id === id);

//   console.log(result);
// };

const update = (id) => {
  const result = todos.findIndex((todo) => todo.id === id);

  console.log(result);
};


update(todoId);
