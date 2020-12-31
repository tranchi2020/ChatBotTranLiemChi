require("dotenv").config();
import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from "body-parser";

let app = express();

viewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

initWebRoute(app);

let port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`App is running at the port:  ${port}`);
});