const routes = require("./app/routes");
const port = 3000;

const mongoConnect = require("./app/services/databaseConnect");
mongoConnect();

routes.listen(port, () => {
	console.log(`server is ready and running on ${port}`);
});
