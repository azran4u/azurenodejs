import express from "express";
import path from "path";
const app = express();
const port = 8090; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.status(200).send("ok");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
