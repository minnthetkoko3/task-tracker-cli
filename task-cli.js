#!/usr/bin/env node

const { addTask, updateTask, deleteTask, changeStatus, listTasks } = require("./controllers/taskController");
const { showMessage, showTasks } = require("./views/taskView");

const [,, command, ...args] = process.argv;

switch (command) {
  case "add":
    showMessage(addTask(args.join(" ")));
    break;
  case "update":
    showMessage(updateTask(args[0], args.slice(1).join(" ")));
    break;
  case "delete":
    showMessage(deleteTask(args[0]));
    break;
  case "mark-in-progress":
    showMessage(changeStatus(args[0], "in-progress"));
    break;
  case "mark-done":
    showMessage(changeStatus(args[0], "done"));
    break;
  case "list":
    showTasks(listTasks(args[0]));
    break;
  default:
    showMessage("Invalid command");
}
