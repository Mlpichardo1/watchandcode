var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My Todos:');
		if (this.todos.length === 0) {
			console.log('this is empty');
		} else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
				if (this.todos[i].completed === true) {
					// print with (x)
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('()', this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todo[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		for (var i = 0; i < totalTodos.length; i++) {
			this.todos[i].completed === true; {
				completedTodos++;
			}
		}
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos.length; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i = 0; i < totalTodos.length; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

var handlers = {
  displayTodos: function() {
	todoList.displayTodos();
  },
  addTodo: function() {
      var addTodoTextInput = document.getElementById("addTodoTextInput");
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
  },
  changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = "";
      changeTodoTextInput.value = "";
  },
  deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = "";
  },
  toggleComplete: function() {
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
  },
    toggleAll: function() {
	todoList.toggleAll();
  }
};

