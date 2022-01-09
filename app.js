const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser')
const cors= require('cors'); 
require('dotenv/config');


app.use(bodyParser.json());

// middle ware
app.use(cors());
// app.use("/post", () => {
//   console.log("This is a middleware running");
// });

// ROUTES
app.get("/", (req, res) => {
  console.log(req)
  res.send("This i home page");s
});




const postRoute = require('./routes/posts');
app.use('/post',postRoute); // route đến file post --> url : 

//connect to db
// b1 : create route
// b2 : create db in cloud and connection 
// b3 : qui định collection --> schema 
// b4 : tạo 4 phương thức của 1 api

mongoose.connect(
  process.env.DB_CONNECTION,
  { userNewUrlParse: true },
  () => {
    console.log("connect to DB");
  }
);

app.listen(3000);

// tạo route
// tạo middleware
// connect database
// npm install mongoose
// npm install dotenv
// require mongooDB
// add { userNewUrlParse: true }, in mongoose.connect
// tạo file .env --> đặt biến DB_CONECTION=mongodb+srv://test:0163712766cc>@cluster0.3j7x8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// config require('dotenv/config');
// thay url cũ bằng process.env.DB_CONNECTION
// Router đến localhost/post/** */

// install middleware : npm install corsj