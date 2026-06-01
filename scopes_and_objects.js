// Create a global variable called globalCount
let globalCount = 0;

// Create a function that demonstrates local scope
function Count() {
  let localCount = 10;
  
  // Create a function that tries to modify both variables
  function modifyCounts() {
    globalCount++;
    localCount++;
  }
  
  modifyCounts();
}

Count();

// Create a Student constructor function
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Create several student instances
const student1 = new Student("Alice", "Johnson", 18);
const student2 = new Student("Bob", "Smith", 17);
const student3 = new Student("Carol", "Williams", 18);

// Create an object literal with nested properties
const school = {
  name: "Tech Academy",
  location: {
    city: "Springfield",
    state: "IL"
  }
};
