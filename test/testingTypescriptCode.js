const should = require("should");
const greeter = require("../lib/tsCode.js");

describe("Test suite for typescript", function(){
	it("should greet the user", function(){
		var greeting = new greeter();
		greeting.greet("Vani").should.equal("A type-scripting greeting to you, Vani");
	});
});