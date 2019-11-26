const inquirer = require("inquirer");

const roster = [];

const managerStuff = function() {
    console.log("we're doing manager stuff");
    inquirer.prompt([{
        type: "input",
        message: "What is your manager's ID?",
        name: "managerLogin"
    },
    {
        type: "input",
        message: "What is your manager's Name",
        name: "managerName"
    }]).then(function(res) {
        const empCard = {
            id: res.managerLogin,
            name: res.managerName
        }
        roster.push(empCard)
        employeeStuff();
    })
}

const employeeStuff = function() {
    inquirer.prompt([{
        type: "input",
        message: "What is your employee's ID?",
        name: "empLogin"
    },
    {
        type: "input",
        message: "What is your employee's Name?",
        name: "empName"
    }, {
        type: "input",
        message: "Enter another?",
        name: "again"
    }]).then(function(res) {
        const empCard = {
            id: res.empLogin,
            name: res.empName
        }

        roster.push(empCard);
        console.log(roster);
        if (res.again === "yes") {
            employeeStuff()
        }
    });
}

managerStuff();