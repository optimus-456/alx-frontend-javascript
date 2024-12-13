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
