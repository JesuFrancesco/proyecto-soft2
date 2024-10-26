import app from "./app";
import { logger } from "./log";

const port = 9090;

// entry point
app.listen(port, () => {
  logger.info("Servidor iniciado en el puerto:", port);
});
