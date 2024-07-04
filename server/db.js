require("dotenv").config();
const mongoose = require("mongoose");

const mongooseuri=process.env.MONGODB_URI;
module.exports = () => {
	const connection = mongoose
		.connect(mongooseuri)
		.then((result) => console.log("Connected to database. ",result))
		.catch((err) => console.log("could not connect to database. Error: ",err));
		console.log("Connection: ",connection);
};
