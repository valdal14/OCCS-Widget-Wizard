const colors = require("colors");
const readline = require("readline-sync");

class Interface {
  /**
   * Print UI CLI interface
   */
  static printInterface() {
    console.log("\n");
    console.log(colors.green(".:: OCCS WIDGET CREATION WIZARD ::."));
    console.log("\n");
    console.log(
      "For more information how to create an Oracle Commerce Cloud extension please visit the link below: \n"
    );
    console.log("https://goo.gl/66Kdpp \n\r");
  }

  /**
   * Returns the Extension ID
   */
  static returnExtensionID() {
    return readline.question(colors.yellow("Enter your extension ID: "));
  }

  /**
   * Returns the developed ID
   */
  static returnDeveloperID() {
    return readline.question(colors.yellow("Enter your developer ID: "));
  }

  /**
   * Returns the Developer name
   */
  static returnDeveloperName() {
    return readline.question(colors.yellow("Enter your developer full name: "));
  }

  /**
   * Returns the Extension name
   */
  static returnTheExtensionName() {
    return readline.question(colors.yellow("Enter the extension name: "));
  }

  /**
   * Returns the Extension description
   */
  static returnExtensionDescription() {
    return readline.question(
      colors.yellow("Enter your extension description: ")
    );
  }
}

module.exports = Interface;
