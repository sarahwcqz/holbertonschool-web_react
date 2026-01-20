/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />


// Création de quelques enseignants
const teacher1: Subjects.Teacher = {
    firstName: 'Queen',
    lastName: 'Maureen',
    experienceTeachingC: 5,
    experienceTeachingReact: 2,
    experienceTeachingJava: 3,
};

const teacher2: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Snow',
};

// Tester Cpp
const cppClass = new Subjects.Cpp();
cppClass.setTeacher(teacher1);
console.log(cppClass.getRequirements()); // Here is the list of requirements for Cpp
console.log(cppClass.getAvailableTeacher()); // Available Teacher: Queen

const cppClass2 = new Subjects.Cpp();
cppClass2.setTeacher(teacher2);
console.log(cppClass2.getAvailableTeacher()); // No available teacher

// Tester React
const reactClass = new Subjects.React();
reactClass.setTeacher(teacher1);
console.log(reactClass.getRequirements()); // Here is the list of requirements for React
console.log(reactClass.getAvailableTeacher()); // Available Teacher: Queen

const reactClass2 = new Subjects.React();
reactClass2.setTeacher(teacher2);
console.log(reactClass2.getAvailableTeacher()); // No available teacher

// Tester Java
const javaClass = new Subjects.Java();
javaClass.setTeacher(teacher1);
console.log(javaClass.getRequirements()); // Here is the list of requirements for Java
console.log(javaClass.getAvailableTeacher()); // Available Teacher: Queen

const javaClass2 = new Subjects.Java();
javaClass2.setTeacher(teacher2);
console.log(javaClass2.getAvailableTeacher()); // No available teacher

(window as any).Subjects = Subjects;