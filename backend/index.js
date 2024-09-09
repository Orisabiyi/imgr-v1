require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => res.status(200).json({ message: "Hello World" }));

mongoose
  .connect(
    `mongodb+srv://orisabiyidavid:${process.env.DB_PASSWORD}@img-data.n7vgx.mongodb.net/img-db?retryWrites=true&w=majority&appName=img-data`
  )
  .then(() => {
    console.log("Database is connected successfully");

    app.listen(process.env.PORT, () =>
      console.log(`Server is running at port ${process.env.PORT}`)
    );
  });
