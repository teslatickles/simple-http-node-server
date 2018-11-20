"use strict";

const http = require("http");
const port = 8000;
const fs = require("fs");

const requestHandler = (request, response) => {
  response.end(
    fs.writeFile(
      "hello-world.txt",
      "Hello to this great world",
      "utf8",
      err => {
        if (err) throw err;
        console.log("success! a new file has been created!");
      }
    )
  );
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }
  console.log(`server is listening on ${port}`);
});
