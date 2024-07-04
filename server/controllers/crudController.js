const Crud = require("../models/crudModel");

// Display All CRUD Data
const crud_index = (req, res) => {
	Crud.find(function (err,cruds) {
		if(err){
			console.log(err);
		}
		
		res.json(cruds);
	});
};

// Create New CRUD
const crud_create_post = (req, res) => {
	let crud = new Crud(req.body);
	crud
		.save()
		.then((crud) => {
			res.send(crud);
		})
		.catch(function (err) {
			res.status(422).send("Crud add failed. Error: ",err);
		});
};

// Show a particular CRUD Detail by Id
const crud_details = (req, res) => {
	Crud.findById(req.params.id, function (err, crud) {
		if (!crud) {
			res.status(404).send("No result found. Error: ",err);
		} else {
			res.json(crud);
		}
	});
};

// Update CRUD Detail by Id
const crud_update = (req, res) => {
	Crud.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("Crud updated");
		})
		.catch(function (err) {
			res.status(422).send("Crud update failed Error: ",err);
		});
};

// Delete CRUD Detail by Id
const crud_delete = (req, res) => {
	Crud.findById(req.params.id, function (err, crud) {
		if (!crud) {
			res.status(404).send("Crud not found.Error:",err);
		} else {
			Crud.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Crud deleted");
				})
				.catch(function (err) {
					res.status(400).send("Crud delete failed. Error: ",err);
				});
		}
	});
};

module.exports = {
	crud_index,
	crud_details,
	crud_create_post,
	crud_update,
	crud_delete,
};
