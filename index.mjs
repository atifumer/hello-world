// console.log("hey ");
// console.log("atif");
// console.log("aaaasa");
// let a = "jdghdkm";
// console.log("server conetrnm");
// console.log("welcome");
// console.log(a);

import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
