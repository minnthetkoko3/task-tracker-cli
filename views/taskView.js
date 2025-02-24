function showMessage(message) {
    console.log(message);
  }
  
  function showTasks(tasks) {
    if (!tasks.length) return console.log("No tasks found");
    console.table(tasks);
  }
  
  module.exports = { showMessage, showTasks };
  