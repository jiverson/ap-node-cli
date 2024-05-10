#!/usr/bin/env node

import inquirer from "inquirer";
import { runBasicExample } from "./commands/basic-example";
import { runChalkExample } from "./commands/chalk-example";
import { runFigletExample } from "./commands/figlet-example";
import { runInquirerExample } from "./commands/inquirer-example";
import { runInquirerConfirmExample } from "./commands/inquirer-confirm-example";
import { runInquirerListExample } from "./commands/inquirer-list-example";
import { runOraExample } from "./commands/ora-example";

const examples = {
  "Basic Example": runBasicExample,
  "Chalk Example": runChalkExample,
  "Figlet Example": runFigletExample,
  "Inquirer Example": runInquirerExample,
  "Inquirer Confirm Example": runInquirerConfirmExample,
  "Inquirer List Example": runInquirerListExample,
  "Ora Example": runOraExample,
};

inquirer
  .prompt([
    {
      type: "list",
      name: "selectedExample",
      message: "Choose an example to run:",
      choices: Object.keys(examples),
    },
  ])
  .then((answers) => {
    const exampleFunction = examples[answers.selectedExample as keyof typeof examples];
    if (exampleFunction) {
      exampleFunction(null);
    } else {
      console.error("Invalid selection");
    }
  });
