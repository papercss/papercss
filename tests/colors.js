(function() {
	"use strict";

	var quixote = require("./vendor/quixote.js");
	var assert = require("./vendor/chai.js").assert;

	describe("Colors", function() {
		var frame;
		var media;
		var textPrimary;
		var textSecondary;
		var textSuccess;
		var textWarning;
		var textDanger;
    var textMuted;

    var backgroundPrimary;
		var backgroundSecondary;
		var backgroundSuccess;
		var backgroundWarning;
		var backgroundDanger;
    var backgroundMuted;

    var textOverride;
    var textNotOverride;

		before(function(done) {
			frame = quixote.createFrame({
				stylesheet: "/base/dist/paper.css"
			}, done);
		});

		after(function() {
			frame.remove();
		});

		beforeEach(function() {
			frame.reset();

			media = frame.add(
        "<div class='media'>" +
          "<div id='text'>" +
            "<p class='text-primary' id='textPrimary'>text-primary</p>" +
            "<p class='text-secondary' id='textSecondary'>text-secondary</p>" +
            "<p class='text-success' id='textSuccess'>text-success</p>" +
            "<p class='text-warning' id='textWarning'>text-warning</p>" +
            "<p class='text-danger' id='textDanger'>text-danger</p>" +
            "<p class='text-muted' id='textMuted'>text-muted</p>" +
          "</div>" +
          "<div id='background'>" +
            "<div class='background-primary' id='backgroundPrimary'>background-primary</div>" +
            "<div class='background-secondary' id='backgroundSecondary'>background-secondary</div>" +
            "<div class='background-success' id='backgroundSuccess'>background-success</div>" +
            "<div class='background-warning' id='backgroundWarning'>background-warning</div>" +
            "<div class='background-danger' id='backgroundDanger'>background-danger</div>" +
            "<div class='background-muted' id='backgroundMuted'>background-muted</div>" +
          "</div>" +
          "<div id='inheritance'>" +
            "<div class='text-primary'>" +
              "<p class='text-success' id='text-override'>text-override</p>" +
              "<p id='text-not-override'>text-not-override</p>" +
            "</div>" +
          "</div>" +
        "</div>",

				"colors"
			);

			textPrimary = frame.get("#textPrimary");
			textSecondary = frame.get("#textSecondary");
			textSuccess = frame.get("#textSuccess");
			textWarning = frame.get("#textWarning");
			textDanger = frame.get("#textDanger");
      textMuted = frame.get("#textMuted");

      backgroundPrimary = frame.get("#backgroundPrimary");
			backgroundSecondary = frame.get("#backgroundSecondary");
			backgroundSuccess = frame.get("#backgroundSuccess");
			backgroundWarning = frame.get("#backgroundWarning");
			backgroundDanger = frame.get("#backgroundDanger");
      backgroundMuted = frame.get("#backgroundMuted");

      textOverride = frame.get("#text-override");
      textNotOverride = frame.get("#text-not-override");
		});

		it("Text color is set to primary", function() {
			assert.equal(textPrimary.getRawStyle("color"), "rgb(65, 64, 62)", "Primary color should be #41403E");
		});

		it("Text color is set to secondary", function() {
			assert.equal(textSecondary.getRawStyle("color"), "rgb(0, 113, 222)", "Secondary color should be #0071DE");
		});

		it("Text color is set to success", function() {
			assert.equal(textSuccess.getRawStyle("color"), "rgb(134, 163, 97)", "Success color should be #86a361");
		});

		it("Text color is set to warning", function() {
			assert.equal(textWarning.getRawStyle("color"), "rgb(221, 205, 69)", "Warning color should be #ddcd45");
		});

		it("Text color is set to danger", function() {
			assert.equal(textDanger.getRawStyle("color"), "rgb(167, 52, 45)", "Danger color should be #a7342d");
		});

		it("Text color is set to muted", function() {
			assert.equal(textMuted.getRawStyle("color"), "rgb(134, 142, 150)", "Muted color should be #868e96");
    });



    it("Background color is set to primary", function() {
			assert.equal(backgroundPrimary.getRawStyle("background-color"), "rgb(193, 192, 189)", "Primary color should be #C1C0BD");
    });

    it("Background color is set to secondary", function() {
			assert.equal(backgroundSecondary.getRawStyle("background-color"), "rgb(222, 239, 255)", "Secondary color should be #DEEFFF");
		});

		it("Background color is set to success", function() {
			assert.equal(backgroundSuccess.getRawStyle("background-color"), "rgb(208, 219, 194)", "Success color should be #D0BDC2");
		});

		it("Background color is set to warning", function() {
			assert.equal(backgroundWarning.getRawStyle("background-color"), "rgb(245, 240, 198)", "Warning color should be #F5F0C6");
		});

		it("Background color is set to danger", function() {
			assert.equal(backgroundDanger.getRawStyle("background-color"), "rgb(240, 203, 201)", "Danger color should be #F0CBC9");
		});

		it("Background color is set to muted", function() {
			assert.equal(backgroundMuted.getRawStyle("background-color"), "rgb(230, 231, 233)", "Muted color should be #E6E7E9");
    });

    it("Text overrides parent style", function(){
      assert.equal(textOverride.getRawStyle("color"), "rgb(134, 163, 97)", "Success color should be #86a361");
    });



    it("Text overrides parent style", function(){
      assert.equal(textOverride.getRawStyle("color"), "rgb(134, 163, 97)", "Success color should be #86a361");
    });

    it("Text has parent style", function(){
      assert.equal(textNotOverride.getRawStyle("color"), "rgb(65, 64, 62)", "Primary color should be #41403E");
    });
	});
}());
