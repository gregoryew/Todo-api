var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoid = req.params.id;
	var output = '';

	var matchedTodo;

	todos.forEach(function (todo) {
		output += output + ' ' + todo.id;
		if (todo.id.toString() === todoid) {
			matchedTodo = todo;
		};
	});

	if (typeof matchedTodo === 'undefined') {
		res.status(404).send();
	} else {
		res.json(matchedTodo);
	}
});

app.post('/todos', function (req, res)  {
	var body = req.body;

	var newItem = {
		id: todoNextId,
		description: body.description,
		completed: false
	};

	todos.push(newItem);

	todoNextId++;

	res.json(todos);
});

app.listen(PORT, function() {
	console.log('Express listening on port '  + PORT  + '!');
});