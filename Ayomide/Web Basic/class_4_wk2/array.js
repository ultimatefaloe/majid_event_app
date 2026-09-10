const scores = [10, 20, 30, 40, 50];

const filterScores = scores.filter((score) => score < 25);

// console.log(filterScores);

const students = [
  { name: "Alice", age: 20, isStudent: false },
  { name: "Bob", age: 25, isStudent: true },
  { name: "Charlie", age: 30, isStudent: true },
  { name: "David", age: 35, isStudent: false },
];

const TrueStudents = students.filter(
  (student) => student.isStudent && student.age > 25,
);

// console.log(TrueStudents);

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Headphones", price: 200, inStock: true },
];

const availableNames = products.filter((p) => p.inStock).map((p) => p.name);

// console.log(availableNames);

const prices = [10, 200, 300, 130, 30];
// Getting the total of all the numbers in the array using reduce
const total = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
// console.log(total)

const max = prices.reduce((biggest, price) => {
  if (price < biggest) {
    return price;
  } else {
    return biggest;
  }

  // price > biggest ? price : bigggest
}, prices[0]);

// console.log(max)

const carts = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Tablet", price: 800, quantity: 3 },
  { name: "Headphones", price: 200, quantity: 4 },
];

const totalPrice = carts.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);

// console.log(totalPrice);

const words = ["apple", "banana", "cherry", "date", "elderberry"];

const longestword = words.reduce(
  (acc, word) => (word.length < acc.length ? word : acc),
  words[0],
);

console.log(longestword);

const matric = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// for (let i = 0; i < matric.length; i++) {
//   for (let j = 0; j < matric[i].length; j++) {
//     matric[i][j] =
//       i !== 1
//         ? Number(`${i}${j}`) % 2 === 0
//           ? "X"
//           : "O"
//         : Number(`${i}${j}`) % 2 === 0
//           ? "O"
//           : "X";
//   }
// }

for (let row = 0; row < matric.length; row++){
  for (let col = 0; col < matric[row].length; col++){
    matric[row][col] = (row + col) % 2 === 0 ? "X" : "0";
  }
}

console.log(matric);
