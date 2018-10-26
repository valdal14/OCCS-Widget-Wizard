const Wizard = require("../wizard");

describe("Configuration Variables", () => {
  wizard = new Wizard(
    "83be3a58-9138-4cbe-884d-cc52b41b8d5b",
    123456789,
    "valdal14",
    "Extension Test",
    "This is a new Extension Test"
  );

  // Extension ID
  it("Extension ID should be at least 36 chars long", () => {
    expect(wizard._extensionId.length).toBe(36);
  });

  it("Extension ID should not be undefined", () => {
    expect(wizard._extensionId).toBeDefined();
  });

  it("Extension ID should throw an error if the length is not valid", () => {
    expect((wizard.extensionId = "231241434")).toThrow();
  });

  // Developer ID
  it("Developer ID should not be undefined", () => {
    expect(wizard._developerID).toBeDefined();
  });

  it("Developer ID should be just numbers", () => {
    expect(parseInt(wizard._developerID)).not.toBeNaN();
  });

  // Created Time
  it("Date should be today", () => {
    expect(Wizard.creationDate()).toEqual("2018-10-5");
  });

  it("Date should be today", () => {
    expect(wizard._created).toEqual("2018-10-5");
  });

  // Created by
  it("Created by should not be undefined", () => {
    expect(wizard._createdBy).toBeDefined();
  });

  // Extension name
  it("Extension name should not be undefined", () => {
    expect(wizard._extensionName).toBeDefined();
  });

  // Description name
  it("Description should not be undefined", () => {
    expect(wizard._description).toBeDefined();
  });
});
