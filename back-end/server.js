const todoMove = require("./routes/ToDo");
const connectDB = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors())

const port = process.env.PORT || 5000;

connectDB();

app.use("/todo-list", todoMove);

app.listen(port, () => console.log(`Listening you on ${port}`));