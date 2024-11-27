import app from "../app";
import { describe, expect } from "@jest/globals";
import request from "supertest";

describe("GET /api/v1/alumnos", () => {
  it("Retornar lista de alumnos desde el servidor", async () => {
    return request(app)
      .get("/api/v1/alumnos/31")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("GET /api/v1/profesores", () => {
  it("Retornar lista de profesores desde el servidor", async () => {
    return request(app)
      .get("/api/v1/profesores/1")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("GET /api/v1/cursos", () => {
  it("Retornar lista de cursos desde el servidor", async () => {
    return request(app)
      .get("/api/v1/clases")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("GET /api/v1/paises", () => {
  it("Retornar lista de paises desde el servidor", async () => {
    return request(app)
      .get("/api/v1/paises")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
