import Employee from "./employee.js";

import fs from "fs";
import os from "os";

function saveEmployeeData(employee) {
  const homeDir = os.homedir();
  const folderPath = `${homeDir}/Desktop/SNVA-Employees`;
  const filePath = `${folderPath}/employees.txt`;

  // Make sure the SNVA-Employees folder exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  const employeeData = `${employee.getId()}, ${employee.getFullName()}, ${employee.getAge()}, ${employee.getContact()}, ${employee.getEmail()}\n`;

  fs.appendFile(filePath, employeeData, "utf8", (error) => {
    if (error) {
      console.log("Error saving employee data: ", error);
    } else {
      console.log(
        `Employee with ID ${employee.getId()} has been added and saved.`
      );
      console.log(`Employee data has been saved to: ${filePath}`);
    }
  });
}

function isValidName(name) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(name);
}

function isValidAge(age) {
  const regex = /^(1[89]|[2-9]\d)$/;
  return regex.test(age);
}

function isValidEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.(com)$/;
  return regex.test(email);
}

function addEmployee(employees, rl, mainMenu) {
  rl.question("Enter full name: ", (fullName) => {
    if (!isValidName(fullName)) {
      console.log("Invalid name. Please use only letters and spaces.");
      mainMenu();
      return;
    }

    rl.question("Enter age: ", (age) => {
      if (!isValidAge(age)) {
        console.log("Invalid age. Please enter a number between 18 and 99.");
        mainMenu();
        return;
      }

      rl.question("Enter contact: ", (contact) => {
        rl.question("Enter email: ", (email) => {
          if (!isValidEmail(email)) {
            console.log(
              "Invalid email. Please ensure it contains the '@' symbol and ends with '.com'."
            );
            mainMenu();
            return;
          }

          const id = employees.length + 1;
          const newEmployee = new Employee(id, fullName, age, contact, email);
          employees.push(newEmployee);
          console.log(`Employee with ID ${id} has been added.`);
          saveEmployeeData(newEmployee);
          mainMenu();
        });
      });
    });
  });
}

export default addEmployee;
