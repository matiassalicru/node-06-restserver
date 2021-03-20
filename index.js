require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Matías",
    },
    {
      id: 2,
      name: "Fernando",
    },
  ];

  res.json(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = 333;

  const result = {
    message: "User created",
    user,
  };
  res.status(201).json(result);
});

app.put("/users/:id", (req, res) => {

  const user = req.body;
  const { id } = req.params;

  user.id = id;

  const result = {
    message: "User updated",
    user
  };
  res.status(200).json(result);
});

app.patch("/users/:id", (req, res) => {
  
  const user = req.body;
  const { id } = req.params;

  user.id = id;

  const result = {
    message: "User updated with Patch",
    user,
  };
  res.status(200).json(result);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const result = {
    message: `User with id: ${id} deleted`,
  };

  res.json(result);
});

app.listen(port, () => {
  console.log(`###### App started at port: ${port} ######`);
});
