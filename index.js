const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/authRoute");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const dburi = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vigvf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(port))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(router);
