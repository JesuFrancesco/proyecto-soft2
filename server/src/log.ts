import * as log4js from "log4js";

// logger
log4js.configure({
  appenders: { consola: { type: "console" } },
  categories: { default: { appenders: ["consola"], level: "info" } },
});

export const logger = log4js.getLogger("root");
