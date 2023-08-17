const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");

// .env read
dotenv.config({ path: "./config/.env" });
//log stream create
const stream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

//route
const sendRouter = require("./router/sendRouter");
const receiveRouter = require("./router/reveiveRouter");

// db connect

const app = express();

app.use(morgan("combined", { stream: stream }));
app.use("/api/v1/send", sendRouter);
app.use("/api/v1/receive", receiveRouter);

const server = app.listen(process.env.PORT || 8000, () => {
  console.log("msr server running port : ", process.env.PORT);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`unhandled Rejection ERR : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
