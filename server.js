const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//Load env
dotenv.config({ path: "./config.env" });

const app = express();

//Profile routes

app.use("/api/v1/profile", require("./routes/profile"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `app listening on ${process.env.NODE_ENV} in port ${process.env.PORT}`
  );
});
