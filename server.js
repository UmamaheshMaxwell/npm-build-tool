const koa = require("koa");
const app = new koa();
app.use(context => {
	context.body = "koa Says Hello";
});

const PORT = process.env.PORT || (process.argv[2] || 1337);

app.listen(PORT, function(){
	console.log("Server Listening at " + PORT);
});