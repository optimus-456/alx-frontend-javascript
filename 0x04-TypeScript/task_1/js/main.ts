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
