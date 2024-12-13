// Define the Student interface
interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const student1: student = {
  firstName: "Toyosi",
  lastName: "Ijaola",
  age: 26,
  location: "Nigeria",
};

const student2: student = {
  firstName: "Michael",
  lastName: "Blessing",
  age: 22,
  location: "Nigeria",
};

//Array declaration containing the students

const studentsList: student[] = [student1, student2];

//Table Rendering

const body = document.querySelector("body");

const table = document.createElement("table");

const tableHeader = document.createElement("tr");

//Creating the table headers
const headerfirstName = document.createElement("th");
headerfirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

tableHeader.appendChild(headerfirstName);
tableHeader.appendChild(headerLocation);
table.appendChild(tableHeader);

// Populate table rows with students' data
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to body
body.appendChild(table);
