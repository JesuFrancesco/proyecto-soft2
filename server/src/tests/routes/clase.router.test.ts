import request from "supertest";
import express, { Request, Response, NextFunction } from "express";
import router from "../../mvc/controller/router/clase.router";
import boom from "@hapi/boom";
import { ClaseDAO } from "../../mvc/model/dao/clase.dao";

// Mock de las dependencias
jest.mock("../../mvc/model/dao/clase.dao");

const app = express();
app.use(express.json());
app.use("/clases", router); // Asumimos que la ruta base es /clases

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

describe("Clase Router", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada prueba
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restaura todos los mocks después de las pruebas
  });

  describe("GET /clases/:id", () => {
    it("debería devolver 200 y la clase si existe", async () => {
      const mockClase = { id: 1, nombre: "Clase A" };

      (ClaseDAO.prototype.findByPk as jest.Mock).mockResolvedValue(mockClase);

      const res = await request(app).get("/clases/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockClase);
    });

    it("debería devolver 404 si no encuentra la clase", async () => {
      (ClaseDAO.prototype.findByPk as jest.Mock).mockRejectedValue(
        boom.notFound("Clase no encontrada")
      );

      const res = await request(app).get("/clases/999");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "Clase no encontrada" });
    });
  });

  describe("GET /clases", () => {
    it("debería devolver 200 y una lista de clases", async () => {
      const mockClases = [
        { id: 1, nombre: "Clase A" },
        { id: 2, nombre: "Clase B" },
      ];

      (ClaseDAO.prototype.findAll as jest.Mock).mockResolvedValue(mockClases);

      const res = await request(app).get("/clases");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockClases);
    });

    it("debería manejar errores al obtener clases", async () => {
      (ClaseDAO.prototype.findAll as jest.Mock).mockRejectedValue(
        new Error("Error al obtener clases")
      );

      const res = await request(app).get("/clases");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al obtener clases" });
    });
  });

  describe("GET /clases/query/:query", () => {
    it("debería devolver 200 y clases filtradas por query", async () => {
      const mockClases = [
        { id: 1, nombre: "Clase A" },
        { id: 2, nombre: "Clase B" },
      ];

      (ClaseDAO.prototype.findByQuery as jest.Mock).mockResolvedValue(
        mockClases
      );

      const res = await request(app).get("/clases/query/clase");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockClases);
    });

    it("debería manejar errores al buscar clases por query", async () => {
      (ClaseDAO.prototype.findByQuery as jest.Mock).mockRejectedValue(
        new Error("Error al buscar clases")
      );

      const res = await request(app).get("/clases/query/clase");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al buscar clases" });
    });
  });

  describe("POST /clases/filter-especialidad", () => {
    it("debería devolver 200 y clases filtradas por especialidades", async () => {
      const mockClases = [
        { id: 1, nombre: "Clase A", especialidadId: 1 },
        { id: 2, nombre: "Clase B", especialidadId: 2 },
      ];

      (ClaseDAO.prototype.findByEspecialidades as jest.Mock).mockResolvedValue(
        mockClases
      );

      const res = await request(app)
        .post("/clases/filter-especialidad")
        .send({ especialidades: [1, 2] });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockClases);
    });

    it("debería manejar errores al filtrar por especialidades", async () => {
      (ClaseDAO.prototype.findByEspecialidades as jest.Mock).mockRejectedValue(
        new Error("Error al filtrar clases")
      );

      const res = await request(app)
        .post("/clases/filter-especialidad")
        .send({ especialidades: [1, 2] });

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al filtrar clases" });
    });
  });

  describe("POST /clases", () => {
    it("debería devolver 201 y crear una nueva clase", async () => {
      const mockClase = { id: 1, nombre: "Clase A" };

      (ClaseDAO.prototype.create as jest.Mock).mockResolvedValue(mockClase);

      const res = await request(app)
        .post("/clases")
        .send({ nombre: "Clase A", temaId: 1 });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockClase);
    });

    it("debería manejar errores al crear una clase", async () => {
      (ClaseDAO.prototype.create as jest.Mock).mockRejectedValue(
        new Error("Error al crear clase")
      );

      const res = await request(app)
        .post("/clases")
        .send({ nombre: "Clase A", temaId: 1 });

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al crear clase" });
    });
  });

  describe("DELETE /clases/:id", () => {
    it("debería devolver 200 y la clase eliminada", async () => {
      const mockClaseEliminada = { id: 1, nombre: "Clase A" };

      (ClaseDAO.prototype.deleteByPk as jest.Mock).mockResolvedValue(
        mockClaseEliminada
      );

      const res = await request(app).delete("/clases/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockClaseEliminada);
    });

    it("debería devolver 404 si no se encuentra la clase", async () => {
      (ClaseDAO.prototype.deleteByPk as jest.Mock).mockRejectedValue(
        boom.notFound("Clase no encontrada")
      );

      const res = await request(app).delete("/clases/999");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "Clase no encontrada" });
    });
  });
});
