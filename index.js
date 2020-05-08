#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const margin = 0;

const info = {
  name: chalk.bold.white("Julien Broens"),
  job: chalk.bold.white(" Developer Web "),
  line: chalk.bold.cyan("--"),
  soloLine: chalk.bold.cyan("-"),
  borderLine: chalk.bold.cyan(
    " ------------------------------------------------------------ "
  ),
  space: " ",
  email: chalk.bold.red("Email:"),
  emailAdressPart1: chalk.magenta("julienbroens"),
  emailAdressPart2: chalk.bold.yellow("@"),
  emailAdressPart3: chalk.magenta("gmail.com"),
  cv: chalk.bold.red("CV:"),
  cvAdress: chalk.magenta("https://julien1988.github.io/julien-broens-cv/"),
  github: chalk.bold.red("Github:"),
  githubAdress: chalk.magenta("https://github.com/Julien1988"),
  linkedin: chalk.bold.red("Linkedin:"),
  linkedinAdress: chalk.magenta(
    "https://linkedin.com/in/julien-broens-24b465184"
  ),
};
console.log(
  boxen(
    [
      ` `,
      `                      ${info.soloLine} ${info.name} ${info.soloLine}`,
      `                   ${info.line} ${info.job} ${info.line}`,
      ` `,
      `${info.borderLine}`,
      ` `,
      `  ${info.email} ${info.emailAdressPart1}${info.emailAdressPart2}${info.emailAdressPart3}`,
      `  ${info.cv} ${info.cvAdress}`,
      `  ${info.github} ${info.githubAdress}`,
      `  ${info.linkedin} ${info.linkedinAdress}  `,
      ` `,
    ].join("\n"),
    {
      padding: margin,
      margin: margin,
      borderStyle: "double",
      borderColor: "cyan",
    }
  )
);
