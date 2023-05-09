// const Employee = require("./Utils/employee.js");
// const readline = require("readline");
// const addEmployee = require("./Utils/addEmployee.js");
// const viewEmployeeById = require("./Utils/viewEmployeeById.js");
// const viewEmployeeByName = require("./Utils/viewEmployeeByName.js");
// const viewEmployeeByEmail = require("./Utils/viewEmployeeByEmail.js");
// const viewAllEmployees = require("./Utils/viewAllEmployees.js");

// const http = require("http");

// const employees = [];

// // Helper functions
// function isValidName(name) {
//   const regex = /^[a-zA-Z\s]+$/;
//   return regex.test(name);
// }

// function isValidAge(age) {
//   const regex = /^(1[89]|[2-9]\d)$/;
//   return regex.test(age);
// }

// function isValidEmail(email) {
//   const regex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.(com)$/;
//   return regex.test(email);
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function mainMenu() {
//   console.log("\nEmployee Management System");
//   console.log("1. Add Employee");
//   console.log("2. View Employee by ID");
//   console.log("3. View Employee by Name");
//   console.log("4. View Employee by Email");
//   console.log("5. View All Employees");
//   console.log("6. Exit");

//   rl.question("\nEnter your choice: ", (choice) => {
//     switch (choice) {
//       case "1":
//         rl.question("Enter full name: ", (fullName) => {
//           if (!isValidName(fullName)) {
//             console.log("Invalid name. Please use only letters and spaces.");
//             mainMenu();
//             return;
//           }

//           rl.question("Enter age: ", (age) => {
//             if (!isValidAge(age)) {
//               console.log(
//                 "Invalid age. Please enter a number between 18 and 99."
//               );
//               mainMenu();
//               return;
//             }

//             rl.question("Enter contact: ", (contact) => {
//               rl.question("Enter email: ", (email) => {
//                 if (!isValidEmail(email)) {
//                   console.log(
//                     "Invalid email. Please ensure it contains the '@' symbol and ends with '.com'."
//                   );
//                   mainMenu();
//                   return;
//                 }

//                 const employeeData = {
//                   fullName,
//                   age,
//                   contact,
//                   email,
//                 };

//                 const options = {
//                   hostname: "localhost",
//                   port: 3000,
//                   path: "/api/v1/addEmployee",
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                     "Content-Length": Buffer.byteLength(
//                       JSON.stringify(employeeData)
//                     ),
//                   },
//                 };

//                 const req = http.request(options, (res) => {
//                   let data = "";

//                   res.on("data", (chunk) => {
//                     data += chunk;
//                   });

//                   res.on("end", () => {
//                     console.log(JSON.parse(data));
//                     mainMenu();
//                   });
//                 });

//                 req.on("error", (error) => {
//                   console.error(`Problem with request: ${error.message}`);
//                 });

//                 req.write(JSON.stringify(employeeData));
//                 req.end();
//               });
//             });
//           });
//         });
//         break;
//       case "2":
//         viewEmployeeById(employees, rl, mainMenu);
//         break;
//       case "3":
//         viewEmployeeByName(employees, rl, mainMenu);
//         break;
//       case "4":
//         viewEmployeeByEmail(employees, rl, mainMenu);
//         break;
//       case "5":
//         viewAllEmployees(employees, mainMenu);
//         break;
//       case "6":
//         console.log;
//       case "6":
//         console.log("Exiting...");
//         rl.close();
//         break;
//       default:
//         console.log("Invalid choice. Please try again.");
//         mainMenu();
//     }
//   });
// }

// mainMenu();

const Employee = require("./Utils/employee.js");
const readline = require("readline");
const addEmployee = require("./Utils/addEmployee.js");
const viewEmployeeById = require("./Utils/viewEmployeeById.js");
const viewEmployeeByName = require("./Utils/viewEmployeeByName.js");
const viewEmployeeByEmail = require("./Utils/viewEmployeeByEmail.js");
const viewAllEmployees = require("./Utils/viewAllEmployees.js");

const http = require("http");

const employees = [];

// Helper functions
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. View Employee by ID");
  console.log("3. View Employee by Name");
  console.log("4. View Employee by Email");
  console.log("5. View All Employees");
  console.log("6. Exit");

  rl.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        rl.question("Enter full name: ", (fullName) => {
          if (!isValidName(fullName)) {
            console.log("Invalid name. Please use only letters and spaces.");
            mainMenu();
            return;
          }

          rl.question("Enter age: ", (age) => {
            if (!isValidAge(age)) {
              console.log(
                "Invalid age. Please enter a number between 18 and 99."
              );
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

                const employeeData = {
                  fullName,
                  age,
                  contact,
                  email,
                };

                const options = {
                  hostname: "localhost",
                  port: 3000,
                  path: "/api/v1/addEmployee",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Content-Length": Buffer.byteLength(
                      JSON.stringify(employeeData)
                    ),
                  },
                };

                const req = http.request(options, (res) => {
                  let data = "";

                  res.on("data", (chunk) => {
                    data += chunk;
                  });

                  res.on("end", () => {
                    console.log(JSON.parse(data));
                    mainMenu();
                  });
                });

                req.on("error", (error) => {
                  console.error(`Problem with request: ${error.message}`);
                });

                req.write(JSON.stringify(employeeData));
                req.end();
              });
            });
          });
        });
        break;
      case "2":
        viewEmployeeById(employees, rl, mainMenu);
        break;
      case "3":
        viewEmployeeByName(employees, rl, mainMenu);
        break;
      case "4":
        viewEmployeeByEmail(employees, rl, mainMenu);
        break;
      case "5":
        viewAllEmployees(employees, mainMenu);
        break;
      case "6":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        mainMenu();
        break;
    }
  });
}

mainMenu();
