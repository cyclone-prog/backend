import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(201).json({
    status: true,
    message: "user is here",
  });
});
app.get("/user", (req, res) => {
  const users = ["ram", "laxman", "bharat"];
  res.status(200).json({
    status: true,
    data: users,
    message: "users added ",
  });
});
app.get("/user/new", (req, res) => {
  const users = ["ram", "laxman", "bharat"];
  users.push("syam");
  res.status(200).json({
    status: true,
    data: users,
    message: "users added ",
  });
});
app.listen(PORT, () => {
  console.log("hey there connected succesfully");
});
