import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

app.get("/", (_, res) => res.send({ message: "Hello World!" }));

app.get("/dog", async (_, res) => {
  try {
    const data = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.info(data);
    res.send(`<img src="${data?.data?.message}" height="240px" />`);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Unable to get a dog image" });
  }
});

app.all("*", (_, res) => res.status(404).send({ message: "Route not found" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
