// DirectorInterface with required methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with required methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function that returns Director or Teacher based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example usage
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Demonstrate functionality
const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);

console.log('Employee 1 (salary 200):');
console.log(employee1.workFromHome());
console.log(employee1.getCoffeeBreak());
if (employee1 instanceof Teacher) {
  console.log(employee1.workTeacherTasks());
}

console.log('Employee 2 (salary 1000):');
console.log(employee2.workFromHome());
console.log(employee2.getCoffeeBreak());
if (employee2 instanceof Director) {
  console.log(employee2.workDirectorTasks());
}

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test executeWork function with expected results
console.log('\nTesting executeWork function:');
console.log(executeWork(createEmployee(200))); // Should print: Getting to work
console.log(executeWork(createEmployee(1000))); // Should print: Getting to director tasks

// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Test teachClass function with expected results
console.log('\nTesting teachClass function:');
console.log(teachClass('Math')); // Should print: Teaching Math
console.log(teachClass('History')); // Should print: Teaching History
