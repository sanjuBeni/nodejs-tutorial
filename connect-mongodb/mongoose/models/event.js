const express = require("express");
const EventEmitter = require("events");
const { eventNames } = require("process");

const app = express();
const event = new EventEmitter();

// handle event
let count = 0;
event.on("eventname", () => {
  ++count;
  console.log("API hit : ", count);
});

app.get("/", (req, res) => {
  res.send("api call");
  // generate event
  event.emit("eventNames");
});

app.get("/search", (req, res) => {
  res.send("search api call");
  event.emit("eventname");
});

app.get("/update", (req, res) => {
  res.send("update api call");
  event.emit("eventname");
});

app.listen("80");
