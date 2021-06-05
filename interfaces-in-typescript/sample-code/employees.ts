const HOURLY_RATE: number = 15;

interface Person {
  firstName: string;
  lastName: string;
}

interface Employee {
  annualSalary: number;
  displayPersonnelRecord(): string;
}

interface HourlyEmployee extends Person, Employee {
  hourlyRate: number;
}

interface SalariedEmployee extends Person, Employee {
  isOfficer: boolean;
}

let hourlyEmployee: HourlyEmployee = {
  firstName: 'Melissa',
  lastName: 'Testing',
  hourlyRate: 15,
  annualSalary: HOURLY_RATE * 2080,
  displayPersonnelRecord(): string {
    return `${this.firstName} ${this.lastName} earns ${this.hourlyRate} / hour and ${this.annualSalary} annually`;
  }
}

let salariedEmployee: SalariedEmployee = {
  firstName: 'Bob',
  lastName: 'Roberts',
  isOfficer: false,
  annualSalary: 50000,
  displayPersonnelRecord(): string {
    return `${this.firstName} ${this.lastName} earns ${this.annualSalary} annually and ${this.isOfficer ? 'is' : 'is not'} an officer`;
  }
}

// console.log(hourlyEmployee.displayPersonnelRecord());
// console.log(salariedEmployee.displayPersonnelRecord());

const process = (employee: Employee) => {
  console.log(employee.displayPersonnelRecord());
}

process(hourlyEmployee);
process(salariedEmployee);
