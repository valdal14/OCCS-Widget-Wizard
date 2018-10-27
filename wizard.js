"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");

class Wizard {
  constructor(extensionId, developerID, createdBy, extensionName, description) {
    this._extensionId = extensionId;
    this._developerID = developerID;
    this._version = 1;
    //YYYY-MM-DD
    this._created = Wizard.creationDate();
    this._createdBy = createdBy;
    this._extensionName = extensionName;
    this._description = description;
    this._path = os.homedir();
  }

  set extensionId(ext) {
    if (ext.length === 36) {
      this._extensionId = ext;
    } else {
      throw new Error("Extension ID not valid");
    }
  }

  get extensionId() {
    return this._extensionId;
  }

  set developerID(devId) {
    if (isNaN(devId)) {
      throw new Error("Developer ID not valid");
    } else {
      this._developerID = devId;
    }
  }

  get developerID() {
    return this._developerID;
  }

  set createdBy(created_by) {
    if (created_by.length !== 0) {
      this._createdBy = created_by;
    } else {
      throw new Error("Created By is not valid");
    }
  }

  get createdBy() {
    return this._createdBy;
  }

  set extensionName(name) {
    if (name.length !== 0) {
      this._extensionName = name;
    } else {
      throw new Error("Extension name is not valid");
    }
  }

  get extensionName() {
    return this._extensionName;
  }

  set description(desc) {
    if (desc.length !== 0) {
      this._description = desc;
    } else {
      throw new Error("Extension name is not valid");
    }
  }

  get description() {
    return this._description;
  }

  /**
   * Set a creation date when the object is instantiated
   */
  static creationDate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
  }

  /**
   * Create the ext.json file
   */
  createExtJson() {
    let jsonFile = {
      extensionID: this._extensionId,
      developerID: this._developerID,
      createdBy: this._createdBy,
      name: this._extensionName,
      timeCreated: this._created,
      description: this._description
    };

    return JSON.stringify(jsonFile);
  }

  /**
   * Create the widget.json file
   */
  createWidgetJson() {
    let wjsonFile = {
      name: this._extensionName,
      version: 1,
      global: false,
      javascript: "widget-javascript",
      pageTypes: ["home"],
      imports: ["products"],
      jsEditable: true,
      config: {}
    };

    return JSON.stringify(wjsonFile);
  }

  /**
   * Create the JS file
   */
  createJavascriptFile() {
    let jsFile = `
      // Javascript widget file \n
      // Implementation guide \n
      // https://docs.oracle.com/cd/E65426_01/Cloud.15-3/WidgetDev/html/s0207createcustomjavascript01.html \n\r

      define( \n
        // Dependencies\n
        ['jquery', 'knockout'],\n\r
      
        // Module Implementation \n
        function(ko) { \n
           // We recommend enabling strict checking mode \n
           'use strict'; \n\r
         
           // Private variables and functions can be defined here... \n
           var SOME_CONSTANT = 1024; \n\r
      
           var privateMethod = function () { \n
             // ... \n
           }; \n\r
      
           return { \n
            // Widget JS \n
            // Some member variables... \n
            textInput: ko.observable(), \n
            // Some public methods... \n
            doSomethingWithInput: function () { \n
              //... \n
            } \n
          } \n
      }); \n\r

      `;

    return jsFile;
  }

  /**
   * Create the display.template file
   */
  createTheHtmlTemplate() {
    let display = `
      // Template File \n
      // Implementation guide: \n
      // https://docs.oracle.com/cd/E65426_01/Cloud.15-3/WidgetDev/html/s0209createaconfigurablelayout01.html \n\r

      <div class="myWidget"> /n
      \n
      </div> \n\r
    `;

    return display;
  }

  /**
   * Create the widget.less file
   */
  createTheLessFile() {
    let wCss = `
    // Widget CSS Less \n
    // Implementation guide: \n
    // https://docs.oracle.com/cd/E65426_01/Cloud.15-3/WidgetDev/html/s0207configureawidgetsstyle01.html \n\r
    
    .myWidget { \n
      \n
    } \n\r
    
    `;

    return wCss;
  }

  /**
   * Create the base folder structure for the widget
   */
  createProjectStructure() {
    const curDir = path.resolve(w._path);

    try {
      if (!fs.existsSync(curDir)) {
        console.log("The widget folder already exists in you HDD");
      } else {
        // create the container folder
        fs.mkdirSync(`${curDir}/${this._extensionName}`);

        //create the widget folder
        fs.mkdirSync(`${curDir}/${this._extensionName}/widget`);

        // create the widget name folder
        fs.mkdirSync(
          `${curDir}/${this._extensionName}/widget/${this._extensionName}`
        );

        //create the js folder
        fs.mkdirSync(
          `${curDir}/${this._extensionName}/widget/${this._extensionName}/js`
        );

        //create the less folder
        fs.mkdirSync(
          `${curDir}/${this._extensionName}/widget/${this._extensionName}/less`
        );

        //create the template folder
        fs.mkdirSync(
          `${curDir}/${this._extensionName}/widget/${
            this._extensionName
          }/templates`
        );

        //create the config folder
        fs.mkdirSync(
          `${curDir}/${this._extensionName}/widget/${
            this._extensionName
          }/config`
        );

        // create the ext.json file
        fs.writeFile(
          `${curDir}/${this._extensionName}/ext.json`,
          this.createExtJson(),
          error => {
            if (error) {
              throw new Error("Cannot write file ext.json");
            } else {
              console.log("The file was saved!");
            }
          }
        );

        //create the widget.json file
        fs.writeFile(
          `${curDir}/${this._extensionName}/widget/${
            this._extensionName
          }/widget.json`,
          this.createWidgetJson(),
          error => {
            if (error) {
              throw new Error("Cannot write file widget.json");
            } else {
              console.log("The file was saved!");
            }
          }
        );

        //create the javascript file
        fs.writeFile(
          `${curDir}/${this._extensionName}/widget/${
            this._extensionName
          }/js/widget-javascript.js`,
          this.createJavascriptFile(),
          error => {
            if (error) {
              throw new Error("Cannot write file widget-javascript.js");
            } else {
              console.log("The file was saved!");
            }
          }
        );

        //create the display.template file
        fs.writeFile(
          `${curDir}/${this._extensionName}/widget/${
            this._extensionName
          }/templates/display.template`,
          this.createTheHtmlTemplate(),
          error => {
            if (error) {
              throw new Error("Cannot write display.template file");
            } else {
              console.log("The file was saved!");
            }
          }
        );

        //create the widget.less file
        fs.writeFile(
          `${curDir}/${this._extensionName}/widget/${
            this._extensionName
          }/less/widget.less`,
          this.createTheLessFile(),
          error => {
            if (error) {
              throw new Error("Cannot write widget.less file");
            } else {
              console.log("The file was saved!");
            }
          }
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

let w = new Wizard(
  "8defeb5d-e958-4cb7-be7c-e28a37ec995d",
  "12345678",
  "Valerio D'Alessio",
  "Example Widget",
  "Open a service request to Oracle Service Cloud"
);

w.createProjectStructure();

module.exports = Wizard;
