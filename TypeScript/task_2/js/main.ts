// --------------- TASK 5 ---------------
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    const numericSalary =
        typeof salary === 'number' ? salary : Number(salary);

    if (numericSalary < 500) {
        return new Teacher();
    }

    return new Director();
}

// To help you correct bru
console.log('task 5');
console.log('Teacher?')
console.log(createEmployee(200));
console.log('Director?')
console.log(createEmployee(1000));
console.log('Director?')
console.log(createEmployee('$500'));



// ------------------- TASK 6 ---------------------
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// To help you correct bru
const emp1 = new Director();
const emp2 = new Teacher();
console.log('task 6');
console.log('expected : Getting to director tasks');
console.log(executeWork(emp1));
console.log('expected : Getting to work');
console.log(executeWork(emp2));



// ----------------- TASK 7 --------------