import app from "../app";
import { describe, expect } from "@jest/globals";
import request from "supertest";

describe("GET /api/v1/accounts", () => {
  it("Retornar cuenta dummy", async () => {
    return request(app)
      .get("/api/v1/accounts/1")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
