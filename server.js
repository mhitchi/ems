//dependencies mysql, inquirer, console.table
//separate file w/ class & constructor function for functions for specific sql queries
//sql joins

const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "052095Meg!",
  database: "employee_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // start inquiring
  start();
});

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
        askViewQ();
      break;
      case "add":
        askAddQ();
      break;
      case "update":
        askUpdateQ();
      break;
    }
  });
}

//ask what they'd like to view
const askViewQ = () => {
  inquirer.prompt(
    {
      type: "list",
      message: "What would you like to view?",
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
        askEmployeeViewQ();
      break;
      case "role":
        console.log("role");
        showRoles();
      break;
      case "department":
        console.log("department");
        showDepartments();
      break;
    }
  });
}

//ask what they'd like to add
const askAddQ = () => {
  inquirer.prompt(
    {
      type: "list",
      message: "What would you like to add?",
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
        console.log(`employee`);
        addEmployee();
      break;
      case "role":
        console.log(`role`);
        addRole();
      break;
      case "department":
        console.log(`department`);
        addDepartment();
      break;
    }
  });
}

//ask what they'd like to update
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
        updateRole();
      break;
      case "employee manager":
        console.log("employee manager");
        updateManager();
      break;
    }
  });
}

//ask if they'd like to view employee by department, role, manager
const askEmployeeViewQ = () => {
  inquirer.prompt(
    {
      type: "list",
      message: "By what category would you like to view employees?",
      name: "category",
      choices: [
        "Role",
        "Department",
        "Manager",
        "View All"
      ]
    },
  ).then((response) => {
    let category = (response.category).toLowerCase();

    switch (category) {
      case "role":
        console.log("role");
        //get roles from db
        showRoles()
      break;
      case "department":
        console.log("department");
        //get departments from db
        showDepartments();
      break;
      case "manager":
        console.log("manager");
        //get managers from db
        showManagers();
      break;
      case "view all":
        console.log("all");
        showEmployees();
    }
  });
}

const showRoles = () => {
  //get roles
  var query = connection.query(
    "SELECT title,id FROM roles",
    (err, res) => {
      if (err) throw err;
      console.log(res)
    }
  );

  console.log(query.sql);
  //TODO ask if they'd like to add a role, view employees by role, or exit
}

const showDepartments = () => {
  //get departments
  var query = connection.query(
    "SELECT name FROM departments",
    (err, res) => {
      if (err) throw err;
      console.log(res)
    }
  );

  console.log(query.sql);
  //TODO ask if they'd like to add a department, view employees by department, or exit
}

const showManagers = () => {
  //get managers
    var query = connection.query(
      "SELECT * FROM employees WHERE is_manager = true",
      (err, res) => {
        if (err) throw err;
        console.log(res)
      }
    );
  
    console.log(query.sql);

  //TODO ask if they'd like to view employees by managers, update an employee's manager, or exit
}

const showEmployees = () => {
  //get departments
  var query = connection.query(
    "SELECT * FROM employees",
    (err, res) => {
      if (err) throw err;
      console.log(res)
    }
  );

  console.log(query.sql);
  //TODO ask if they'd like to add an employee, update an employee's information, or exit
}

const addEmployee = () => {
  showRoles();
  //ask for first_name, last_name, role, is_manager
  inquirer.prompt([
    {
      type: "input",
      message: "What is this employee's first name?",
      name: "first_name",
    },
    {
      type: "input",
      message: "What is this employee's last name?",
      name: "last_name",
    },
    {
      type: "list",
      message: "Is this employee a manager?",
      name: "is_manager",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "input",
      message: "What is the role id of this employee?",
      name: "role_id",
    }
  ]).then((response) => {
    let is_manager = response.is_manager;
    let first_name = response.first_name;
    let last_name = response.last_name;
    var role_id = response.role_id;

    const dbAddEmp = (first_name, last_name, role_id, is_manager) => {
      //add to db
      var query = connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: first_name,
          last_name: last_name,
          role_id: role_id,
          is_manager: is_manager
        },
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " employee inserted!\n");
        }
      );

      console.log(query.sql);
    }

    switch (is_manager) {
      case "Yes":
        //WORKING
        is_manager = true;
        //add to db
        dbAddEmp(first_name, last_name, role_id, is_manager);
      break;
      case "No":
        //WORKING
        is_manager = false;
        //check if department has a manager
        //if department has a manager, add manager_id
        //add to db
        dbAddEmp(first_name, last_name, role_id, is_manager);
      break;
    }
  });
}

const addRole = () => {
  //ask for title, salary, department
  showDepartments();
  //ask for title, salary, department_id
  inquirer.prompt([
    {
      type: "input",
      message: "What is this role's title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is this role's salary?",
      name: "salary",
    },
    {
      type: "list",
      message: "What is this role's department id?",
      name: "department_id",
    }
  ]).then((response) => {
    let title = response.title;
    let salary = response.salary;
    let department_id = response.department_id;

    //add to db
    var query = connection.query(
      "INSERT INTO employees SET ?",
      {
        title: title,
        salary: salary,
        department_id: department_id
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " role inserted!\n");
      }
    );

    console.log(query.sql);
  });
}

const addDepartment = () => {
  //ask for name
  inquirer.prompt(
    {
      type: "input",
      message: "What is this department's name?",
      name: "name",
    }
  ).then((response) => {
    let name = response.name;

    //add to db
    var query = connection.query(
      "INSERT INTO departments SET ?",
      {
        name: name
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " department inserted!\n");
      }
    );

    console.log(query.sql);
  });
}

const updateRole = () => {
  //ask employee first_name, last_name
  //show employee info
  //ask what the new role is
  //show employee info
  //update db
}

const updateManager = () => {
  //ask employee first_name, last_name
  //show employee info
  //ask name of new manager
  //show employee info
  //update db
}