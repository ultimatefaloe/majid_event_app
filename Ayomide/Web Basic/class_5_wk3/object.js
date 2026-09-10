const person = {
  name: "Ayomide",
  age: 20,
  email: "ayomide@example.com",
  phone: 1234567890,
  courses: ["HTML", "CSS", "JavaScript"],
};

// person["city"] = "New York";
// person.country = "USA";
// Dot notation
const personName = person.name;
const personAge = person.age;
const personEmail = person.email;
const personPhone = person.phone;
const personCourses = person.courses;

// Bracket Notation
const personNameBracket = person["name"];
const personAgeBracket = person["age"];
const personEmailBracket = person["email"];
const personPhoneBracket = person["phone"];
const personCoursesBracket = person["courses"];

// console.log("========= Dot Notation =========");
// console.log("==============================")
// console.log("Name:", personName);
// console.log("Age:", personAge);
// console.log("Email:", personEmail);
// console.log("Phone:", personPhone);
// console.log("Courses:", personCourses);

console.log("========= Bracket Notation =========");
console.log("==============================");
// console.log("Name:", personNameBracket);
// console.log("Age:", personAgeBracket);
// console.log("Email:", personEmailBracket);
// console.log("Phone:", personPhoneBracket);
// console.log("Courses:", personCoursesBracket);

// person.email = "john@example.com";

// delete person.name;

// console.log(!!person.name);

const car = {
  name: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Silver",
  milage: [10, 20, 30, 40, 50],
  totalMilage: 0,
  startEngnine: function () {
    console.log("Engine started");
  },
  stopEngine: function () {
    console.log("Engine stopped");
  },
  drive: function () {
    console.log("Car is driving");
  },
  upgareModel: function () {
    console.log("Upgrading model...");
    return (this.model = "Camry XSE");
    this.year = 2024;
  },
  total: function () {
    console.log("Calculating total mileage...", this.milage);
    this.totalMilage = this.milage.reduce((acc, curr) => acc + curr, 0);
  },
};

// car.total();


// For in loop to iterate over the properties of an object
// for (let key in person) {
//   console.log(key)
//   console.log(person[key])
//   console.log(person.key)
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
console.log(Object.entries(person))


Object.entries(person).forEach(([key, value]) => {
  console.log(key, value)
});