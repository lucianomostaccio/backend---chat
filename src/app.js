// server //
import express, { json, urlencoded } from "express";
import __dirname from "./utilities/utils.js"
import { join } from "path";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routers/views.router.js";
import apiRouter from "./routers/api.router.js";
import onConnection from "./controllers/socket.controller.js";

// initialize server
const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Server listening in port: ${port}`);
}); 

// sockets server
const io = new Server(server); 
// io.on('connection', onConnection(io));

// handlebars engine & templates:
app.engine("handlebars", handlebars.engine());
app.set("views", join(__dirname, "views"));
app.set("view engine", "handlebars");

// middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "static"))); //specify static folder

// routers
app.use("/", viewsRouter);
app.use("/api/", apiRouter)


