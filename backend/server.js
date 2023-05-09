const http = require("http");
const url = require("url");
const addEmployee = require("../Utils/addEmployee.js");
const viewEmployeeById = require("../Utils/viewEmployeeById.js");
const viewEmployeeByName = require("../Utils/viewEmployeeByName.js");
const viewEmployeeByEmail = require("../Utils/viewEmployeeByEmail.js");
const viewAllEmployees = require("../Utils/viewAllEmployees.js");


// let employees = [{
// 	"fullName":"dheeraj",
// 	"age":20,
// 	"email":"someone@gmail.com",
// 	"contact":"1212121212"
// }];
const server = http.createServer((req, res) => {
  
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  switch (path) {
    case "/api/v1/addEmployee":
      console.log("Received addEmployee request");
      // Use the addEmployee utility function
      switch(req.method){
        case "POST":
          {
            let chunks = [];

            req.on('data', (chunk) => {
                chunks.push(chunk);
            });

            req.on('end', () => {
                const data = Buffer.concat(chunks);
                //todo: need validation
                const newEmployee = JSON.parse(data.toString())
                console.log(newEmployee)
                const employees= addEmployee(newEmployee)
                res.setHeader('content-type', 'application/json');
                res.statusCode = 200;
                res.write(JSON.stringify( employees))
                res.end();
            });
            break;
            
            
            break;
          }
          case "POST":{
            break;
          }
      }

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

// module.exports = { employees };


