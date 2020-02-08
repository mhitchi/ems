//dependencies mysql, inquirer, console.table
//separate file w/ class & constructor function for functions for specific sql queries
//sql joins

const mysql = require("mysql");
const inquirer = require("inquirer");

// const connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "052095Meg!",
//   database: "employee_DB"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   // start inquiring
//   start();
//   connection.end();
// });

//ask initial question
const start = () => {
  console.log("Welcome to your Employee Management System.");
  inquirer.prompt(
    {
      type: "list",
      message: "What would you like to do?",
      name: "actionType",
      choices: [
        "View",
        "Add",
        "Update"
      ]
    },
  ).then((response) => {
    let actionType = (response.actionType).toLowerCase();

    switch (actionType) {
      case "view":
        askViewAddQ(actionType);
      break;
      case "sdd":
        askViewAddQ(actionType);
      break;
      case "update":
        askUpdateQ();
      break;
    }
  });
}

const askViewAddQ = (actionType) => {
  inquirer.prompt(
    {
      type: "list",
      message: `What would you like to ${actionType}?`,
      name: "category",
      choices: [
        "Employee",
        "Role",
        "Department"
      ]
    },
  ).then((response) => {
    let category = (response.category).toLowerCase();

    switch (category) {
      case "employee":
        console.log("employee");
      break;
      case "role":
        console.log("role");
      break;
      case "department":
        console.log("department");
      break;
    }
  });
}

const askUpdateQ = () => {
  inquirer.prompt(
    {
      type: "list",
      message: `What would you like to update?`,
      name: "category",
      choices: [
        "Employee Role",
        "Employee Manager"
      ]
    },
  ).then((response) => {
    let category = (response.category).toLowerCase();

    switch (category) {
      case "employee role":
        console.log("employee role");
      break;
      case "employee manager":
        console.log("employee manager");
      break;
    }
  });
}

start();