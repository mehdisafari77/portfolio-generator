const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./generateHtml")

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "location",
        message: "Where are you located?"
    },
    {
        type: "input",
        name: "bio",
        message: "Tell me a bit about yourself."
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github?"
    },
    {
        type: "input",
        name: "linkedin",
        message: "What is your Linkedin?"
    },
]

function init() {
    inquirer.prompt(questions)
    .then(response => {
       fs.writeFile("index.html", generateHtml(response), err => {
           console.log(err)
       })
    })
}

init()