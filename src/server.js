const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
const userController = require("./controllers/user.controller");
const bookController = require("./controllers/book.controller");
const commentController =require("./controllers/comment.controller");
const publicationController =require("./controllers/publication.controller");

const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://Kamal_kishor_rajput:Rajput_01@cluster0.bd1r4.mongodb.net/smallBookSystem?retryWrites=true&w=majority"
  );
};
app.use("/users", userController);
app.use("/books", bookController);
app.use("/publications", publicationController);
app.use("/comments", commentController);


app.listen(6500, async function () {
  try {
    await connect();
  } catch (e) {
    console.log(e);
  }
  console.log("listing to the port 6500");
});
