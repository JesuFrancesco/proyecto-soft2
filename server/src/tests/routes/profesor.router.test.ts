import request from "supertest";
import express, { Request, Response, NextFunction } from "express";
import router from "../../mvc/controller/router/profesor.router";
import boom from "@hapi/boom";
import { ProfesorDAO } from "../../mvc/model/dao/profesor.dao";

// Mock de las dependencias
jest.mock("../../mvc/model/dao/profesor.dao");

const app = express();
app.use(express.json());
app.use("/profesores", router); // Asumimos que la ruta base es /profesores

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

describe("Profesor Router", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada prueba
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restaura todos los mocks después de las pruebas
  });

  describe("GET /profesores/:id", () => {
    it("debería devolver 200 y el profesor si se encuentra", async () => {
      const mockProfesor = { id: 1, nombre: "Profesor A" };

      (ProfesorDAO.prototype.findByPk as jest.Mock).mockResolvedValue(
        mockProfesor
      );

      const res = await request(app).get("/profesores/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockProfesor);
    });

    it("debería devolver 404 si no se encuentra el profesor", async () => {
      (ProfesorDAO.prototype.findByPk as jest.Mock).mockRejectedValue(
        boom.notFound("Profesor no encontrado")
      );

      const res = await request(app).get("/profesores/999");

      console.log(res);

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "Profesor no encontrado" });
    });

    it("debería manejar errores inesperados", async () => {
      (ProfesorDAO.prototype.findByPk as jest.Mock).mockRejectedValue(
        new Error("Error inesperado")
      );

      const res = await request(app).get("/profesores/1");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error inesperado" });
    });
  });

  describe("GET /profesores", () => {
    it("debería devolver 200 y una lista de profesores", async () => {
      const mockProfesores = [
        { id: 1, nombre: "Profesor A" },
        { id: 2, nombre: "Profesor B" },
      ];

      (ProfesorDAO.prototype.findAllByRating as jest.Mock).mockResolvedValue(
        mockProfesores
      );

      const res = await request(app).get("/profesores");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockProfesores);
    });

    it("debería manejar errores al obtener los profesores", async () => {
      (ProfesorDAO.prototype.findAllByRating as jest.Mock).mockRejectedValue(
        new Error("Error al obtener profesores")
      );

      const res = await request(app).get("/profesores");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al obtener profesores" });
    });
  });

  describe("GET /profesores/query/:query", () => {
    it("debería devolver 200 y los profesores filtrados por query", async () => {
      const mockProfesores = [
        { id: 1, nombre: "Profesor A" },
        { id: 2, nombre: "Profesor B" },
      ];

      (ProfesorDAO.prototype.findByQuery as jest.Mock).mockResolvedValue(
        mockProfesores
      );

      const res = await request(app).get("/profesores/query/Profesor");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockProfesores);
    });

    it("debería manejar errores al buscar profesores por query", async () => {
      (ProfesorDAO.prototype.findByQuery as jest.Mock).mockRejectedValue(
        new Error("Error al buscar profesores")
      );

      const res = await request(app).get("/profesores/query/Profesor");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al buscar profesores" });
    });
  });

  describe("POST /profesores", () => {
    it("debería devolver 201 y crear un nuevo profesor si los datos son válidos", async () => {
      const mockProfesor = { id: 1, nombre: "Profesor A" };

      (ProfesorDAO.prototype.create as jest.Mock).mockResolvedValue(
        mockProfesor
      );

      const res = await request(app)
        .post("/profesores")
        .send({ nombre: "Profesor A", edad: 40 });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockProfesor);
    });

    it("debería manejar errores al crear un nuevo profesor", async () => {
      (ProfesorDAO.prototype.create as jest.Mock).mockRejectedValue(
        new Error("Error al crear profesor")
      );

      const res = await request(app)
        .post("/profesores")
        .send({ nombre: "Profesor A", edad: 40 });

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al crear profesor" });
    });
  });

  describe("DELETE /profesores/:id", () => {
    it("debería devolver 200 y el profesor eliminado", async () => {
      const mockProfesorEliminado = { id: 1, nombre: "Profesor A" };

      (ProfesorDAO.prototype.deleteByPk as jest.Mock).mockResolvedValue(
        mockProfesorEliminado
      );

      const res = await request(app).delete("/profesores/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockProfesorEliminado);
    });

    it("debería devolver 404 si no se encuentra el profesor para eliminar", async () => {
      (ProfesorDAO.prototype.deleteByPk as jest.Mock).mockRejectedValue(
        boom.notFound("Profesor no encontrado")
      );

      const res = await request(app).delete("/profesores/999");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "Profesor no encontrado" });
    });

    it("debería manejar errores inesperados al eliminar", async () => {
      (ProfesorDAO.prototype.deleteByPk as jest.Mock).mockRejectedValue(
        new Error("Error al eliminar profesor")
      );

      const res = await request(app).delete("/profesores/1");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al eliminar profesor" });
    });
  });
});
