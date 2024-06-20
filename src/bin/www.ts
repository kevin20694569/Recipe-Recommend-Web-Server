import dotenv from "dotenv";
dotenv.config();
if (process.env.NODE_ENV == "development") {
  dotenv.config({ path: path.resolve(__dirname, "../../" + `${process.env.NODE_ENV}.env`) });
}
import http from "http";
import path from "path";

import app from "../app";

const port = process.env.PORT;
app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});
