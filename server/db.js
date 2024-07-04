require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	const connection = mongoose
		.connect("mongodb://0.0.0.0:27017/MERNI")
		.then((result) => console.log("Connected to database. ",result))
		.catch((err) => console.log("could not connect to database. Error: ",err));
		console.log("Connection: ",connection);
};
