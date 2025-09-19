/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

// Create teachers with different experience levels
const teacher1: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const teacher2: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
  experienceTeachingReact: 5,
  experienceTeachingJava: 0,
};

// Create subject instances
const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

// Test C++ subject
console.log('C++:');
cpp.setTeacher(teacher1);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

cpp.setTeacher(teacher2);
console.log(cpp.getAvailableTeacher());

// Test React subject
console.log('\nReact:');
react.setTeacher(teacher1);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

react.setTeacher(teacher2);
console.log(react.getAvailableTeacher());

// Test Java subject
console.log('\nJava:');
java.setTeacher(teacher1);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

java.setTeacher(teacher2);
console.log(java.getAvailableTeacher());