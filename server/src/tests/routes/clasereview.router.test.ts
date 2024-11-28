import request from "supertest";
import express, { Request, Response, NextFunction } from "express";
import router from "../../mvc/controller/router/clasereview.router";

import { ClaseReviewDAO } from "../../mvc/model/dao/clasereview.dao";
import { AlumnoDAO } from "../../mvc/model/dao/alumno.dao";
import { sb } from "../../app";

jest.mock("../../mvc/model/dao/clasereview.dao");
jest.mock("../../mvc/model/dao/alumno.dao");
jest.mock("../../mvc/controller/middleware/authorization.handler", () => ({
  authHandler: jest.fn((req, res, next) => next()), // Mock del middleware
}));

jest.mock("../../app", () => ({
  sb: {
    auth: {
      getUser: jest.fn(),
    },
  },
}));

const app = express();
app.use(express.json());
app.use("/", router);

interface CustomError extends Error {
  output?: {
    statusCode?: number;
    payload?: object;
  };
}

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.output?.statusCode || 500).json({
    message: err.message || "Error interno del servidor",
  });
});

describe("Clasereview Router", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe("GET /", () => {
    it("debería devolver 200 y una lista de reseñas", async () => {
      const mockReviews = [
        { id: 1, content: "Buen trabajo" },
        { id: 2, content: "Excelente clase" },
      ];

      (ClaseReviewDAO.prototype.findAll as jest.Mock).mockResolvedValue(
        mockReviews
      );

      const res = await request(app).get("/");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockReviews);
    });

    it("debería manejar errores al obtener reseñas", async () => {
      (ClaseReviewDAO.prototype.findAll as jest.Mock).mockRejectedValue(
        new Error("Error al obtener reseñas")
      );

      const res = await request(app).get("/");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al obtener reseñas" });
    });
  });

  describe("POST /", () => {
    it("debería devolver 201 y crear una reseña si todo es válido", async () => {
      jest.setTimeout(15000);

      // Mock de autenticación exitoso
      (sb.auth.getUser as jest.Mock).mockResolvedValue({
        data: { user: { id: 123 } },
      });

      // Mock de Alumno y creación de reseña
      const mockAlumno = { id: 456 };
      const mockReview = { id: 789, content: "Buen trabajo" };

      (AlumnoDAO.prototype.findByAccountId as jest.Mock).mockResolvedValue(
        mockAlumno
      );
      (ClaseReviewDAO.prototype.create as jest.Mock).mockResolvedValue(
        mockReview
      );

      const res = await request(app)
        .post("/")
        .set("Authorization", "Bearer token123")
        .send({ content: "Buen trabajo" });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockReview);
    });

    it("debería devolver 500 si falla AlumnoDAO", async () => {
      (sb.auth.getUser as jest.Mock).mockResolvedValue({
        data: { user: { id: 123 } },
      });

      (AlumnoDAO.prototype.findByAccountId as jest.Mock).mockRejectedValue(
        new Error("Error al buscar alumno")
      );

      const res = await request(app)
        .post("/")
        .set("Authorization", "Bearer token123")
        .send({ content: "Buen trabajo" });

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: "Error al buscar alumno" });
    });
  });
});
