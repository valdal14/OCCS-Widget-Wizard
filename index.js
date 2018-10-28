"use strict";

const Wizard = require("./wizard");
const Interface = require("./Interface");

Interface.printInterface();

let wizard = new Wizard();
wizard.extensionId = Interface.returnExtensionID();
wizard.developerID = Interface.returnDeveloperID();
wizard.createdBy = Interface.returnDeveloperName();
wizard.extensionName = Interface.returnTheExtensionName();
wizard.description = Interface.returnExtensionDescription();

console.log("\n");
wizard.createProjectStructure();
console.log("\n");
