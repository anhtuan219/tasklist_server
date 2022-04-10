import JsonServer from "json-server";

const server = JsonServer.create();
const router = JsonServer.router("db.json");
const middleware = JsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middleware);
server.use(router);

server.listen(port);
