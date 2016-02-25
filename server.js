var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
var bcrypt = require('bcrypt');
var path = require('path');

var middleware = require('./middleware.js')(db);

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;


app.use(bodyParser.json());
app.use('/js',express.static(path.join(__dirname, '/js')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
//Get /todos? Completed=true
app.get('/orders', middleware.requireAuthentication, function (req,res) {
	var where = {
		userId: req.user.get('id')
	};


	db.order.findAll({where : where}).then (function (orders) {
		res.json(orders);
	}, function (e) {
		res.status(500).send();
	})

})


//Get /todos/:id
app.get('/todos/:id', middleware.requireAuthentication,function (req,res) {
	var todoId = parseInt(req.params.id, 10);

	db.todo.findOne({
		where: {
			id: todoId,
			userId: req.user.get('id')
		}
	}).then(function (todo) {
		if(!!todo){
			res.json(todo.toJSON());
		}else {
			res.status(404).send();
		}
	}, function (e) {
		res.status(500).send();
	});


});

//POST /orders

app.post('/orders', middleware.requireAuthentication, function (req,res) {
	var body = _.pick(req.body, 'Customer_name', 'Customer_email', 'Customer_email', 'shipping_address', 'billing_address', 'totalPrice', 'totalItems','Date');

	db.order.create(body).then(function (order) {
		req.user.addOrder(order).then(function () {
			return order.reload();
		}).then(function (order) {
			res.json(order.toJSON());
		});
	}, function (e) {
		res.status(400).json(e);
	});

});

// DELETE /todos/:id

app.delete('/todos/:id', middleware.requireAuthentication,function (req, res) {
	var todoId = parseInt(req.params.id, 10);

	db.todo.destroy({
		where: {
			id: todoId,
			userId: req.user.get('id')
		}
	}).then(function (rowDeleted) {
		if(rowDeleted === 0) {
			res.status(404).json({
				error: 'No todo with id'
			});
		}else {
			res.status(204).send();
		}
	}, function () {
			res.status(500).send();
		});
	});



//PUT /todos/:id

app.put('/todos/:id', middleware.requireAuthentication,function (req, res) {
	var todoId = parseInt(req.params.id, 10);

	var body = _.pick(req.body, 'description', 'completed');
	var attributes = {};


	if(body.hasOwnProperty('completed')) {
		attributes.completed = body.completed;
	} 

	if(body.hasOwnProperty('description')) {
		attributes.description = body.description;
	} 
		//Never provided attributes
	db.todo.findOne({
		where: {
			id: todoId,
			userId: req.user.get('id')
		}
	}).then(function (todo) {
		if (todo) {
			todo.update(attributes).then(function (todo) {
			res.json(todo.toJSON());
			}, function (e) {
				res.status(400).json(e);
			});
		} else {
			res.status(404).send();
		}
	}, function () {
		res.status(500).send();
	});
});


app.post('/users', function (req, res) {
	var body = _.pick(req.body, 'name','shipping_address','billing_address','email', 'password');
	console.log(body);
	db.user.create(body).then(function (user) {
		res.json(user.toPublicJSON());
	}, function (e) {
		res.status(400).json(e);
	})
});

//POST /users/login

app.post('/users/login', function (req, res) {
	var body = _.pick(req.body, 'email', 'password');
	var userInstance;

	db.user.authenticate(body).then(function (user) {
		var token = user.generateToken('authentication');
		userInstance = user;
		return db.token.create({
			token: token
		});
		
	}).then(function (tokenInstance) {
		res.header('Auth', tokenInstance.get('token')).json(userInstance.toPublicJSON());
	}).catch (function (e) {
		res.status(401).send();
	});

	
});


// DELETE /users/login
app.delete('/users/login', middleware.requireAuthentication,function (req, res) {
	
	req.token.destroy().then(function () {
		res.status(204).send();
	}).catch(function () {
		res.status(500).send();
	});
});

db.sequelize.sync().then(function () {
		app.listen(PORT, function () {
		console.log('Express listening on port '+ PORT + '!');
	});
});



