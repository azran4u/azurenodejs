import express from "express";
import { config } from "./config";

const app = express();
const port = config.server.port;

app.get("/", (req, res) => {
  res.status(200).send("v2");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at ${process.env.WEBSITE_HOSTNAME}:${port}`);
});
