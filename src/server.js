const express = require("express");

const mongoose = require("mongoose");

const app = express();

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Kamal_kishor_rajput:Rajput_01@cluster0.bd1r4.mongodb.net/smallBookSystem?retryWrites=true&w=majority"
  );
};

app.listen(6500, async function () {
  try {
    await connect();
  } catch (e) {
    console.log(e);
  }
  console.log("listing to the port 6500");
});
