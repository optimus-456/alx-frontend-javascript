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
