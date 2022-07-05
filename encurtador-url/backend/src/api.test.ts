import request from "supertest";
import app from "./app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

describe("Api test", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  it("should be status 200 and body ok", async () => {
    const statusResponse = await request(app).get("/").send();

    expect(statusResponse.status).toBe(200);
    expect(statusResponse.body).toHaveProperty("status", "ok");
  });

  it("should return a hash from a generate short link", async () => {
    const shortenResponse = await request(app).post("/shorten").send({
      url: "http://test",
    });

    expect(shortenResponse.status).toBe(201);
    expect(shortenResponse.body).toHaveProperty("hash");
  });

  it("should return a hash from existent url", async () => {
    const shortenResponse = await request(app).post("/shorten").send({
      url: "http://test",
    });
    const newShortenResponse = await request(app).post("/shorten").send({
      url: "http://test",
    });
    
    expect(newShortenResponse.status).toBe(201);
    expect(newShortenResponse.body).toHaveProperty("hash");
    
    expect(shortenResponse.body.hash).toBe(newShortenResponse.body.hash)
  });
  
  it('should return a new hash for a new short link', async () => {
    const shortenResponse = await request(app).post("/shorten").send({
      url: "http://test",
    });
    const newShortenResponse = await request(app).post("/shorten").send({
      url: "http://test2",
    });
    
    expect(shortenResponse.status).toBe(201);
    expect(shortenResponse.body).toHaveProperty("hash");
    
    expect(newShortenResponse.body.hash).not.toBe(shortenResponse.body.hash);
  });
  
  it('should return a error', async () => {
    const invalidShortenResponse = await request(app).post("/shorten").send({
      url: "google.com.br",
    });
    
    expect(invalidShortenResponse.status).toBe(404);
    expect(invalidShortenResponse.body).toHaveProperty("error", "Invalid URL");
  });
  
  it('should redirect url', async () => {
    const shortenResponse = await request(app).post("/shorten").send({
      url: "https://google.com.br",
    });

    const redirect = await request(app).get(`/${shortenResponse.body.hash}`).send()

    expect(redirect.status).toBe(302)
  });
});
