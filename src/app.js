import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";

import _dirname from "./_dirname.js";
import viewRoutes from "./routes/views.routes.js";
import { connectDB } from "./config/mongoDb.config.js";
import apiRoutes from "./routes/index.routes.js";
import { initializePassport } from "./config/passport.config.js";
connectDB();

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("views", _dirname + "/views");
app.use(express.static("public"));
app.use(
    session({
        secret: "codigoSecreto",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
initializePassport();

app.use("/", viewRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});