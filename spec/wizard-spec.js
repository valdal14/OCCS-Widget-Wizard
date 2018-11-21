const Wizard = require("../wizard");

describe("Configuration Variables", () => {
  wizard = new Wizard();

  wizard.extensionId = "83be3a58-9138-4cbe-884d-cc52b41b8d5b";
  wizard.developerID = 12345678;
  wizard.createdBy = "valdal14";
  wizard.extensionName = "Extension Test";
  wizard.description = "This is a new Extension Test";

  // Extension ID
  it("Extension ID should be at least 36 chars long", () => {
    expect(wizard._extensionId.length).toBe(36);
  });

  it("Extension ID should not be undefined", () => {
    expect(wizard._extensionId).toBeDefined();
  });

  it("Extension ID should throw an error if the length is not valid", () => {
    expect(function() {
      wizard.extensionId("231241434");
    }).toThrow();
  });

  // Developer ID
  it("Developer ID should not be undefined", () => {
    expect(wizard._developerID).toBeDefined();
  });

  it("Developer ID should be just numbers", () => {
    expect(parseInt(wizard._developerID)).not.toBeNaN();
  });

  it("Should throw if the value passed is not an integer", () => {
    expect(function() {
      wizard.developerID("weyuweir");
    }).toThrow();
  });

  // Created Time
  it("Date should be today", () => {
    let date = new Date();
    today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    expect(Wizard.creationDate()).toEqual(today);
  });

  it("Date should be today", () => {
    let date = new Date();
    today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    expect(wizard._created).toEqual(today);
  });

  // Created by
  it("Created by should not be undefined", () => {
    expect(wizard._createdBy).toBeDefined();
  });

  it("Created by should throw if if the argument length is 0", () => {
    expect(function() {
      wizard.createdBy();
    }).toThrow();
  });

  // Extension name
  it("Extension name should not be undefined", () => {
    expect(wizard._extensionName).toBeDefined();
  });

  it("Extension name should be lowered and should not contains spaces", () => {
    let string = "OCCS Wizard".replace(/\s/g, "").toLocaleLowerCase();
    expect(string).toEqual("occswizard");
  });

  it("Extension name should throw if if the argument length is 0", () => {
    expect(function() {
      wizard.extensionName();
    }).toThrow();
  });

  // Description name
  it("Description should not be undefined", () => {
    expect(wizard._description).toBeDefined();
  });

  it("Description should throw if if the argument length is 0", () => {
    expect(function() {
      wizard.description();
    }).toThrow();
  });
});
