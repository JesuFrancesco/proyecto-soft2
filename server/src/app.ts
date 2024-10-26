import express from "express";
import cors from "cors";
import { logRequestsHandler } from "./mvc/controller/middleware/log.handler";
import {
  errorHandler,
  logErrores,
  boomErrorHandler,
} from "./mvc/controller/middleware/error.handler";
import { routerAPI } from "./mvc/controller/router";

import { createClient } from "@supabase/supabase-js";
import { config } from "./config";
import { authHandler } from "./mvc/controller/middleware/authorization.handler";

// supabase anon client
export const sb = createClient(config.supabaseURL, config.supabaseAnonKey);

// express client
const app = express();

// express json middleware
app.use(express.json());

// express cors middleware
app.use(
  cors({
    origin: ["http://localhost:3000", config.azureOrigin],
    credentials: true,
  })
);

// log requests
app.use(logRequestsHandler);

// auth middleware
app.use(authHandler);

// main router
routerAPI(app);

// exception middleware
app.use(logErrores);
app.use(boomErrorHandler);
app.use(errorHandler);

export default app;
