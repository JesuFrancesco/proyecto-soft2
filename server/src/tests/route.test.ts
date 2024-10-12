import app from "../app";
import { describe, expect } from "@jest/globals";
import request from "supertest";

describe("GET /api/v1/accounts", () => {
  it("Retornar todas las cuentas", async () => {
    return request(app)
      .get("/api/v1/accounts")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
