import app from "./app";

const port = 8080;

// entry point
app.listen(port, () => {
  console.log("Servidor iniciado en el puerto:", port);
});
