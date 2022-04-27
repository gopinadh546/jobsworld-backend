if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
dotenv.config({ path: "/BackendJW/config/config.env" });
const res = require("express/lib/response");
const cookieParser = require("cookie-parser");
const cors = require("cors"); 

const port = 4000;
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

//create a write stream(in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
 

// setup the logger
// app.use(morgan(":method :status :url"));
app.use(morgan('[:date[clf]] - ":method :url HTTP/:http-version" :status',{ stream: accessLogStream }))
// app.use(morgan("dev", { stream: accessLogStream }));

app.get("/morgan", function (req, res) {
  res.send("Morgan Logger..");
});
app.listen(port, () => {
  console.log("Morgan is running in http://localhost:4000");
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const jobs = require("./routes/jobs");
const shortlist = require("./routes/shortlist");
const resume = require("./routes/resume");
const user = require("./routes/users");

database();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", jobs);
app.use("/", shortlist);
app.use("/", resume);
app.use("/", user);

const server = app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started on 5000!!!`);
});
