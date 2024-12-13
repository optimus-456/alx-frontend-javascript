//Defining teacher interface

interface Teacher {
  readonly firstname: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperince: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

//Defining the printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//Implementing the printTeacher functio
const printTeacher: printTeacherFunction = (firstname, lastname) => {
  return `${firstname}.${lastname}`;
};

// Example usage of the printTeacher function
console.log(printTeacher("Arowosafe", "Eniola"));

// Interface for the constructor arguments
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName()); // Output: "John"

// Define DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
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

// Implement the Teacher class
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

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Test cases
console.log(createEmployee(200) instanceof Teacher); // true
console.log(createEmployee(1000) instanceof Director); // true
console.log(createEmployee("$500") instanceof Director); // true
