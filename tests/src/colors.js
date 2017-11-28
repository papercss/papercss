(function() {
	"use strict";

	var quixote = require("../vendor/quixote.js");
	var assert = require("../vendor/chai-2.1.0").assert;

	describe("Colors", function() {
		var frame;
		var media;
		var textPrimary;
		var textSecondary;
		var textSuccess;
		var textWarning;
		var textDanger;
		var textMuted;

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
					"<p class='text-primary' id='textPrimary'>text-primary</p>" +
					"<p class='text-secondary' id='textSecondary'>text-secondary</p>" +
					"<p class='text-success' id='textSuccess'>text-success</p>" +
					"<p class='text-warning' id='textWarning'>text-warning</p>" +
					"<p class='text-danger' id='textDanger'>text-danger</p>" +
					"<p class='text-muted' id='textMuted'>text-muted</p>" +
				"</div>",

				"colors"
			);

			textPrimary = frame.get("#textPrimary");
			textSecondary = frame.get("#textSecondary");
			textSuccess = frame.get("#textSuccess");
			textWarning = frame.get("#textWarning");
			textDanger = frame.get("#textDanger");
			textMuted = frame.get("#textMuted");
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
	});
}());