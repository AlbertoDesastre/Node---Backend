const express = require("express");
const app = express();

const config = require("../config.js");
const user = require("./components/user/network");

// Router
app.use(express.json());

app.use("/api/user", user);

app.listen(config.api.port, () => {
  console.log("API escuchando en el puerto ", config.api.port);
});
