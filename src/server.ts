import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

// Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Settings
app.set("views", "/home/nattybuntu/projects/nathanael_allen_dev/src/views");
app.set("view engine", "ejs");
app.enable("trust proxy");

// Middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(express.static(__dirname + "/styles/"))
app.use(express.static(__dirname + "/static/"))


app.get("/", (req, res) => {
  res.render("pages/index", {title: "Nathanael-Allen.dev"})
});

app.listen(3000, () => {
  console.log("Server listening at: http://localhost:3000");
})