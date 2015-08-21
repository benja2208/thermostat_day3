  // Adding jasmine-jquery tests

describe("Thermostat", function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = ".";
    loadFixtures("index.html");
    $.holdReady(false);
  });

  describe("temperature display", function() {
    it("starts at 20", function() {
      expect("#temperature").toContainText("20");
    });

    it("increases when click on increase", function() {
      $("#increase").click();
      expect("#temperature").toContainText("21");
    });

    it("decreases when click on descrease", function(){
      $("#decrease").click();
      expect("#temperature").toContainText("19");
    });

    it("resets temperature when click on reset", function(){
      $("#decrease").click();
      $("#reset").click();
      expect("#temperature").toContainText("20");
    });

    it("can go up and down consistently", function(){
      $("#decrease").click();
      expect('#temperature').toContainText('19');
      $("#increase").click();
      expect('#temperature').toContainText('20');
    });

    it("can switch power saving mode off",function(){
      $("#power_saving_mode").change();
    });


 });

});