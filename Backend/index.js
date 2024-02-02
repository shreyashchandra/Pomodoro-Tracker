import express from "express";
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 3100;

app.get("/", (req, res) => {
  res.send({
    msg: "Hi there! This the backend of pomodoro tracker",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at : http://localhost:${PORT}/`);
});
