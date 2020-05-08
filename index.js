#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const margin = 1;

const info = {
  name: chalk.white(" - Julien Broens -"),
  job: chalk.white("-- Developer Web --"),
  line: chalk.white("-- Developer Web --"),
};
console.log(
  boxen([`${info.name}`, `${info.job}`].join("\n"), {
    padding: margin,
    margin: margin,
    borderStyle: "double",
    borderColor: "cyan",
  })
);
