  // Adding jasmine-jquery tests

describe("Thermostat", fucntion() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = "..";
    loadFixtures("index.html");
    $.holdReady(false);
  });

  describe("temperature display", function() {
    it("starts at 20", function() {
      expect("#temperature").toContainText("20");
    });
  });


});