"use strict";

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
}

module.exports = Wizard;
