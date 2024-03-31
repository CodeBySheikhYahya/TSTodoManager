#!/usr/bin/env node

// What's a while loop?: It's a programming construct that repeats a block of code as long as a condition is true.
// Why use a while loop in a Todo app?: We use it to keep showing the tasks to the user until they decide to stop using the app.
// In code: We use a while loop to keep showing tasks until the user decides to exit. Inside the loop, we ask the user if they want to continue or exit. If they choose to continue, we show the next task. If they choose to exit, we stop the loop.
// like  
//while(condition) is condition walay box may jab tak condition true rahegi wo execute hothii rahegii jahan per condition false hui wo wahin ruk jaigii {}
// again we using arrays for multiple values if you have a singular value so you dont need to apply array 
// ye jo curly brackets hain  ye apnay andar object ko represent kartha hay




import inquirer from "inquirer";

let tasks = [];
let condition = true;

while (condition) {
    let taskPrompt = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What tasks do you want to include?"
        },
        {
            name: 'AdditionalTask',
            type: "confirm",
            message: "Do you want to include additional tasks?",
            default: false // Setting default value to false
        }
    ]);

    tasks.push(taskPrompt.task);

    // Display task count
    console.log(`Task count: ${tasks.length}`);

    // Display task list
    console.log("Task List:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });

    condition = taskPrompt.AdditionalTask;

    if (!condition) {
        console.log("No additional tasks will be added. Exiting...");
    }
}
