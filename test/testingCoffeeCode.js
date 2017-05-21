const fill = require("../lib/first.js");
const should = require("should");

describe("This is test suite for coffee script", function(){
	it("should disply nice coffee message", function(){
		fill("mug","coffee").should.equal("Filling the mug with coffee");
	});
});