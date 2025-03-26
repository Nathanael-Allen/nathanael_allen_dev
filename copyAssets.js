import { cp } from "fs/promises";
import { join } from "path";

const __dirname = import.meta.dirname;

cp(join(__dirname, "src/static"), join(__dirname, "dist/static"), {
  recursive: true,
})
  .then(() => {
    console.log("Successfully copied static assets to dist");
  })
  .catch((err) => {
    console.log(err);
  });

cp(join(__dirname, "src/styles/output.css"), join(__dirname, "dist/styles/output.css"), {
  recursive: true,
})
  .then(() => {
    console.log("Successfully copied styles to dist");
  })
  .catch((err) => {
    console.log(err);
  });

cp(join(__dirname, "src/index.html"), join(__dirname, "dist/index.html"), {
  recursive: true,
})
  .then(() => {
    console.log("Successfully copied index to dist");
  })
  .catch((err) => {
    console.log(err);
  });
