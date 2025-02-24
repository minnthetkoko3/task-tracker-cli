const { readTasks, writeTasks } = require("../models/taskModel");

// Add a task
function addTask(description) {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  return `Task added successfully (ID: ${newTask.id})`;
}

// Update a task description
function updateTask(id, newDescription) {
  const tasks = readTasks();
  const task = tasks.find((task) => task.id == id);
  if (!task) return "Task not found";
  task.description = newDescription;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  return "Task updated successfully";
}

// Delete a task
function deleteTask(id) {
  let tasks = readTasks();
  const updatedTasks = tasks.filter((task) => task.id != id);
  if (tasks.length === updatedTasks.length) return "Task not found";
  writeTasks(updatedTasks);
  return "Task deleted successfully";
}

// Change task status
function changeStatus(id, status) {
  const tasks = readTasks();
  const task = tasks.find((task) => task.id == id);
  if (!task) return "Task not found";
  task.status = status;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  return `Task marked as ${status}`;
}

// List tasks based on status or all
function listTasks(filter) {
  const tasks = readTasks();
  return filter ? tasks.filter((task) => task.status === filter) : tasks;
}

module.exports = { addTask, updateTask, deleteTask, changeStatus, listTasks };
