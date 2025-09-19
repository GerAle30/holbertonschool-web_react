// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student variables
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Create and render the table using Vanilla JavaScript
const body = document.body;
const table = document.createElement('table');

// Create table header
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add each student as a row in the table
studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Add some basic styling to make the table visible
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.border = '1px solid #ddd';

const cells = table.querySelectorAll('th, td');
cells.forEach((cell: Element) => {
  const htmlCell = cell as HTMLElement;
  htmlCell.style.border = '1px solid #ddd';
  htmlCell.style.padding = '8px';
  htmlCell.style.textAlign = 'left';
});

const headers = table.querySelectorAll('th');
headers.forEach((header: Element) => {
  const htmlHeader = header as HTMLElement;
  htmlHeader.style.backgroundColor = '#f2f2f2';
});

// Append the table to the body
body.appendChild(table);
