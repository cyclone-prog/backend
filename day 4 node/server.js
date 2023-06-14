import express from "express";
import "dotenv/config";
import indexRouter from "./routes/index.js";
import { dbConnection } from "./config/db.config.js";

dbConnection();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //use of express middleware, whenever we are sending data from req to convert json to javascript object. This is done when data is being send from client POST/PATCH.
app.use(express.urlencoded({ extended: true }));//common way to send data from HTML forms.

app.use(indexRouter);
app
  .listen(PORT, () => {
    console.log("hey there connected succesfully");
  })
  .on("error", (error) => {
    console.error("An error occurred:", error);
  }); 
