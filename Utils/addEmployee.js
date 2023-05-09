const Employee = require("./employee.js");
const fs = require("fs");
const os = require("os");

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

function addEmployee(req, res, employees) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const { fullName, age, contact, email } = JSON.parse(body);

    if (!isValidName(fullName) || !isValidAge(age) || !isValidEmail(email)) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          error: "Invalid input. Please check the data provided.",
        })
      );
      return;
    }

    const id = employees.length + 1;
    const newEmployee = new Employee(id, fullName, age, contact, email);
    employees.push(newEmployee);
    saveEmployeeData(newEmployee);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: `Employee with ID ${id} has been added.` })
    );
  });
}

module.exports = addEmployee;
