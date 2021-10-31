import express from "express";
import { config } from "./config";

const app = express();
const port = config.server.port;

// define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.status(200).send("dev");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at ${process.env.WEBSITE_HOSTNAME}:${port}`);
});
