import request from 'supertest'
import app from './app';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

describe('Api test', () => {

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri())
  })

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  })

  it('should be status 200 and body ok', async () => {
    const response = await request(app).get("/").send()

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('status', 'ok')
  });

  it('should return a hash', async () => {
    const response = await request(app).post("/shorten").send({
      url: 'ikatoo.com.br'
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('hash')
  });
});
