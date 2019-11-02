const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//Load env
dotenv.config({ path: "./config.env" });

const app = express();

// Dev Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Profile routes
app.use("/api/v1/profile", require("./routes/profile"));

//  Handle production
if (process.env.NODE_ENV === "production") {
  // Set static folder

  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `app listening on ${process.env.NODE_ENV} in port ${process.env.PORT}`
  );
});
