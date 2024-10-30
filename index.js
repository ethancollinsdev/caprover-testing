import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send({ message: "Hello World!" }));

app.all("*", (req, res) => res.status(404).send({ message: "Route not found" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
