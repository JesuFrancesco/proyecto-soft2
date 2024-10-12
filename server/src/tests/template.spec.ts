import { expect } from "chai";
import request from "supertest";
import { app } from "../index";
import { describe, it } from "node:test";

/**
 * Pruebas unitarias para las rutas de usuarios
 */
describe("User Routes", () => {
  // Test para obtener todos los usuarios
  describe("GET /users", () => {
    it("should return a list of users", async () => {
      const res = await request(app).get("/users");

      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.greaterThan(0);
    });
  });

  // Test para obtener un usuario específico por ID
  describe("GET /users/:id", () => {
    it("should return a single user by ID", async () => {
      const userId = 1;
      const res = await request(app).get(`/users/${userId}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("object");
      expect(res.body).to.have.property("id", userId);
    });

    it("should return 404 if user is not found", async () => {
      const nonExistentId = 999;
      const res = await request(app).get(`/users/${nonExistentId}`);
      expect(res.status).to.equal(404);
    });
  });

  // Test para crear un nuevo usuario
  describe("POST /users", () => {
    it("should create a new user", async () => {
      const newUser = {
        name: "John Doe",
        email: "johndoe@example.com",
      };

      const res = await request(app).post("/users").send(newUser);
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("id");
      expect(res.body.name).to.equal("John Doe");
      expect(res.body.email).to.equal("johndoe@example.com");
    });

    it("should return 400 if required fields are missing", async () => {
      const invalidUser = {
        email: "johndoe@example.com",
      };

      const res = await request(app).post("/users").send(invalidUser);
      expect(res.status).to.equal(400);
    });
  });
});
