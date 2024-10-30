import express from "express";
const app = express();
const port = 3000;

app.get("/", (_, res) => res.send({ message: "Hello World!" }));

app.all("*", (_, res) => res.status(404).send({ message: "Route not found" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
