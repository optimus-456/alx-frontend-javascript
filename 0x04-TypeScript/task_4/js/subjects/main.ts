// Define the Teacher interface
interface Teacher {
  experienceTeachingC?: number;
}

// Define the Subject interface
abstract class Subject {
  teacher?: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  abstract getRequirements(): string;
  abstract getAvailableTeacher(): string;
}

// Cpp Subject
class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for C++";
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC) {
      return `Available Teacher: ${this.teacher.experienceTeachingC} years of experience teaching C++`;
    }
    return "No available teacher";
  }
}

// Java Subject
class Java extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC) {
      return `Available Teacher: ${this.teacher.experienceTeachingC} years of experience teaching Java`;
    }
    return "No available teacher";
  }
}

// React Subject
class React extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC) {
      return `Available Teacher: ${this.teacher.experienceTeachingC} years of experience teaching React`;
    }
    return "No available teacher";
  }
}

// Create and export constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object
export const cTeacher: Teacher = { experienceTeachingC: 10 };

// Set the teacher and log for Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set the teacher and log for Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set the teacher and log for React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
