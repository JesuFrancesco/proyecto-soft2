import express from "express";
import cors from "cors";
import {
  errorHandler,
  logErrores,
  boomErrorHandler,
} from "./mvc/controller/middleware/error.handler";
import { routerAPI } from "./mvc/controller/router";

import { createClient } from "@supabase/supabase-js";
import { config } from "./config";

const app = express();

// supabase auth

// Create a single supabase client for interacting with your database
// const supabase = createClient(config.supabaseURL, config.supabaseServiceRole);

// (async () => {
//   const { data } = await supabase.auth.admin.listUsers();
//   console.log(data.users);
// })()

// hello world
app.get("/", (req, res) => {
  res.send("hola desde server express.js");
});

// express json middleware
app.use(express.json());
app.use(cors());

// require("./util/auth");

// main router
routerAPI(app);

// custom middleware
app.use(logErrores);
app.use(boomErrorHandler);
app.use(errorHandler);

export default app;
