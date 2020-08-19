#!/usr/bin/env node

const breaktime = require("./breaktime.js");

const command = process.argv[2];

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  // to do: make help log
  console.log("print help");
} else if (command == "list") {
  breaktime.listBreak();
}
