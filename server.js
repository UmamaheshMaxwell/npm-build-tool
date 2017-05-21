const koa = require("koa");
const path = require("path");
const swig  = require('swig');
const app = new koa();

var template = swig.compileFile('./index.html');

app.use(context => {
	context.body = template();
});

const PORT = process.env.PORT || (process.argv[2] || 1337);

app.listen(PORT, function(){
	console.log("Server Listening at " + PORT);
});