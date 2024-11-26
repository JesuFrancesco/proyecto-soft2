import app from "../app";
import { describe, expect } from "@jest/globals";
import request from "supertest";

describe("GET /api/v1/alumnos", () => {
  it("Retornar alumno mock", async () => {
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
  it("Retornar profesor mock", async () => {
    return request(app)
      .get("/api/v1/profesores/1")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("GET /api/v1/paises", () => {
  it("Retornar paises", async () => {
    return request(app)
      .get("/api/v1/paises")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
