const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../tasks.json");

// Ensure tasks.json exists
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

// Read tasks from JSON
function readTasks() {
  return JSON.parse(fs.readFileSync(FILE_PATH));
}

// Write tasks to JSON
function writeTasks(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

// Export functions
module.exports = { readTasks, writeTasks };
