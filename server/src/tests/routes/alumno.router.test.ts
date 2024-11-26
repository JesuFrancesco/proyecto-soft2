import request from "supertest";
import express, { Request, Response, NextFunction } from "express";
import router from "../../mvc/controller/router/alumno.router";
import boom from "@hapi/boom";
import { AlumnoDAO } from "../../mvc/model/dao/alumno.dao";

// Mock de las dependencias
jest.mock("../../mvc/model/dao/alumno.dao");

const app = express();
app.use(express.json());
app.use("/alumnos", router); // Asumimos que la ruta base es /alumnos

// Interfaz para manejar errores personalizados
interface CustomError extends Error {
  output?: {
    statusCode?: number;
    payload?: object;
  };
}

// Middleware para capturar errores
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.output?.statusCode || 500).json({
    message: err.message || "Error interno del servidor",
  });
});

describe("Alumno Router", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada prueba
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restaura todos los mocks después de las pruebas
  });

  describe("GET /alumnos/:id", () => {
    it("debería devolver 200 y el alumno si se encuentra", async () => {
      const mockAlumno = { id: 1, nombre: "Juan Pérez" };

      (AlumnoDAO.prototype.findByPk as jest.Mock).mockResolvedValue(mockAlumno);

      const res = await request(app).get("/alumnos/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockAlumno);
    });

    it("debería devolver 404 si no se encuentra el alumno", async () => {
      (AlumnoDAO.prototype.findByPk as jest.Mock).mockRejectedValue(
        boom.notFound("Alumno no encontrado")
      );

      const res = await request(app).get("/alumnos/999");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "Alumno no encontrado" });
    });

    it("debería manejar errores inesperados", async () => {
      (AlumnoDAO.prototype.findByPk as jest.Mock).mockRejectedValue(
        new Error("Error inesperado")
      );

      const res = await request(app).get("/alumnos/1");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error inesperado" });
    });
  });

});
