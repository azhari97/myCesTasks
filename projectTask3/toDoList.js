function addItem() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
      const listItem = createListItem(task);
      document.getElementById('currentTasks').appendChild(listItem);
      taskInput.value = '';
      saveTasks();
    }
  }

  function createListItem(task) {
    const listItem = document.createElement('tr');
    const taskCell = document.createElement('td');
    taskCell.textContent = task;
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      listItem.remove();
      saveTasks();
    };
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
      document.getElementById('completedTasks').appendChild(listItem);
      completeButton.remove();
      saveTasks();
    };
    actionCell.appendChild(deleteButton);
    actionCell.appendChild(completeButton);
    listItem.appendChild(taskCell);
    listItem.appendChild(actionCell);
    return listItem;
  }

  function saveTasks() {
    const currentTasks = document.getElementById('currentTasks').innerHTML;
    const completedTasks = document.getElementById('completedTasks').innerHTML;
    localStorage.setItem('currentTasks', currentTasks);
    localStorage.setItem('completedTasks', completedTasks);
  }

  function loadTasks() {
    const currentTasks = localStorage.getItem('currentTasks');
    const completedTasks = localStorage.getItem('completedTasks');
    if (currentTasks) {
      document.getElementById('currentTasks').innerHTML = currentTasks;
    }
    if (completedTasks) {
      document.getElementById('completedTasks').innerHTML = completedTasks;
    }
  }

  document.getElementById('addButton').addEventListener('click', addItem);
  window.onload = loadTasks;