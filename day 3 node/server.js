import express from "express";
import "dotenv/config";
import indexRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);
app.listen(PORT, () => {
  console.log("hey there connected succesfully");
});
