interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: "Rihanna",
    lastName: "Badgal",
    age: 37,
    location: "Barbados"
}

const student2: Student = {
    firstName: "Vivian",
    lastName: "Wilson",
    age: 21,
    location: "LA"
}

const studentsList : Student[] = [student1, student2]


// --------------- Creating a table containing the students ------------ //
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';

// Header -----------------------------------
const header = document.createElement('tr');

const names = document.createElement('th');
names.textContent = 'First Name';

const locations = document.createElement('th');
locations.textContent = 'Location';

header.appendChild(names);
header.appendChild(locations);
table.appendChild(header);

// Rows -------------------------------------
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const name = document.createElement('td');
  name.textContent = student.firstName;

  const location = document.createElement('td');
  location.textContent = student.location;

  row.appendChild(name);
  row.appendChild(location);
  table.appendChild(row);
});

document.body.appendChild(table);
