const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();

app.use(express.json());
app.use(
  cors({
    origin: ["<ALB-URL>", "http://localhost:5173"],
  })
);

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.use("/api/tasks", tasks);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));
