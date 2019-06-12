const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const app = express();

app.use(compression());
app.use(helmet());
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.get("/inlove", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 3000);
