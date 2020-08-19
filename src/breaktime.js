const fs = require("fs");
const os = require("os");
const path = require("path");

const breaktimeFilePath = path.join(os.homedir(), ".breaktime.json");

// READ FUNCTION
const loadBreaktime = () => {
  try {
    const fileContent = fs.readFileSync(breaktimeFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    return {
      breaks: [],
    };
  }
};

const logBreak = (date) => {
  const data = loadBreaktime();
  data.breaks.push({
    time: new Date(),
    duration: "",
  });
};

const listBreak = () => {
  const data = loadBreaktime();
  console.table(data.breaks);
};

module.exports = {
  list: listBreak,
  log: logBreak,
};
