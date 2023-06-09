import express from "express";
import "dotenv/config";
import indexRouter from "./routes/index.js";
const app = express();

app.use(indexRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("hey there connected succesfully");
});
