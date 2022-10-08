import { createServer } from "./server";
import { logger } from "logger";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});
