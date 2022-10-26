const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();

app.use(cors()).use(express.json());

mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

app.use(require("./routes/index"));

app.listen(+process.env.PORT, () => {
    console.log(+process.env.PORT);
});