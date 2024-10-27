import app from "./app";
import { logger } from "./log";

const port = 8080;

// entry point
app.listen(port, () => {
  logger.info("Servidor iniciado en el puerto:", port);
});
