require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("welcome to the absolute shadow");
});

// todo router
let todoRouter = require(path.join(
  __dirname,
  "routes",
  "todoRouter",
  "todoRouter.js"
));

app.use("/todos", todoRouter);
/*======================================================================================*/
// server panel
/*======================================================================================*/

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("DB was connected successfully");
    app.listen(process.env.PORT, () => {
      console.log("------------------------------");
      console.log("The server is online and ready");
      console.log("------------------------------");
    });
  })
  .catch((err) => {
    console.log({ message: err.message });
  });
