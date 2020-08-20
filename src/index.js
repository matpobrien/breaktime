#!/usr/bin/env node

const breaktime = require("./breaktime.js");

const command = process.argv[2];

let date = new Date();

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  // to do: make help log
  console.log("print help");
} else if (command == "table") {
  breaktime.listBreak();
  //Start a new break - command line enters break mode
} else if (command == time) {
  const data = loadBreaktime();
  console.log("Time to rest. You've earned it!");
  //Get last break information
} else if (command == last) {
  const data = loadBreaktime();
  console.log(
    `Your last break was at ${date}. It's been X minutes since then.`
  );
  //Set break duration
} else if (command == set) {
  //End current break
} else if (command == end) {
}
