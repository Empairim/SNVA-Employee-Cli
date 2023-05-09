const http = require("http");
const url = require("url");
const addEmployee = require("../Utils/addEmployee.js");
const viewEmployeeById = require("../Utils/viewEmployeeById.js");
const viewEmployeeByName = require("../Utils/viewEmployeeByName.js");
const viewEmployeeByEmail = require("../Utils/viewEmployeeByEmail.js");
const viewAllEmployees = require("../Utils/viewAllEmployees.js");

const employees = [];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  switch (path) {
    case "/api/v1/addEmployee":
      console.log("Received addEmployee request");
      // Use the addEmployee utility function
      break;
    case "/api/v1/viewEmployeeById":
      // Use the viewEmployeeById utility function
      break;
    case "/api/v1/viewEmployeeByName":
      // Use the viewEmployeeByName utility function
      break;
    case "/api/v1/viewEmployeeByEmail":
      // Use the viewEmployeeByEmail utility function
      break;
    case "/api/v1/viewAllEmployees":
      // Use the viewAllEmployees utility function
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = { employees };
