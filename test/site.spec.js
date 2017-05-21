var supertest = require("supertest");

var server = supertest.agent("http://localhost:4000");

describe("test suite to test local APIs", function(){

	it("should display welcome message", function(done){
		server
			.get("/")
			.expect("koa Says Hello")
			.end(done);
	});
});