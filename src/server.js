const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");

const server = express();

//Setting
server.set("port", 4500);

//Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
server.use("/api/user", routes.user);
server.use("/api/post", routes.post);
server.use("/api/comment", routes.comment);

//Static folder

server.use(express.static(path.join(__dirname, "statics")));

module.exports = server;
