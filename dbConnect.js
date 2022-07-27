const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vaibhavi:123vaibhavi890@cluster-expense-tracker.f5iwl4h.mongodb.net/expense-tracker",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));

connection.on("connected", () =>
  console.log("Mongo DB Connection Successfull")
);
