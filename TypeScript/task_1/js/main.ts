// ----------- TASK 1 ----------------
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
// To help you correct bru
const teacher1: Teacher = {
  firstName: 'Marie',
  lastName: 'Curie',
  fullTimeEmployee: true,
  location: 'Paris',
  contract: true,
};
console.log("task 1");
console.log(teacher1);



// -------------- TASK 2 --------------
interface Directors extends Teacher {
  numberOfReports: number;
}
// To help you correct bru
const director1: Directors = {
  firstName: 'Indra',
  lastName: 'Nooyi',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 120000,
  contract: true,
};
console.log("task 2");
console.log(director1);



// ---------------- TASK 3 -------------
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// To help you correct bru
console.log("task 3");
console.log(printTeacher('Marie', 'Curie'));



// ----------------- TASK 4 ----------------
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


// To help you correct bru
const student = new StudentClass({
  firstName: 'Sabrina',
  lastName: 'Pasterski',
});

console.log("task 4");
console.log(student);
console.log(student.displayName());
console.log(student.workOnHomework());
