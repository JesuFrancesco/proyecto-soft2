import express from "express";
import cors from "cors";
import {
  errorHandler,
  logErrores,
  boomErrorHandler,
} from "./middleware/error.handler";
import { routerAPI } from "./router";
import { createClient } from "@supabase/supabase-js";
import { config } from "./config";

const app = express();
const port = 8080;

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

// entry point
app.listen(port, () => {
  console.log("Servidor iniciado en el puerto:", port);
});
