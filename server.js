var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch.',
	completed: false
}, {
	id: 2,
	description: 'Go to market.',
	completed: false
}, {
	id: 3,
	description: 'Learn node.js.',
	completed: true
}];

app.get('/', function (req, res, next) {
	res.send('Todo API Root');
});

//GET /todos
app.get('/todos', function (req, res, next) {
	res.json(todos);
});

//GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoid = req.params.id;
	var output = '';

	//res.send('Asking for todo with id of ' + todoid);

	var matchedTodo;

	todos.forEach(function (todo) {
		output += output + ' ' + todo.id;
		if (todo.id.toString() === todoid) {
			matchedTodo = todo;
		};
	});

/*
	for (var i = 0; i < todos.length; ++i) {
		output = output + ' ' + todos[i].id;
		if (todos[i].id.toString() === todoid) {
			matchedTodo = todos[i];
		}
	}
*/

	//res.send(output);

	if (typeof matchedTodo === 'undefined') {
		res.status(404).send();
	} else {
		res.json(matchedTodo);
	}
});

app.listen(PORT, function() {
	console.log('Express listening on port '  + PORT  + '!');
});