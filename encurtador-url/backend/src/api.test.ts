import request from 'supertest'
import app from './app';

describe('Api test', () => {
  it('should be status 200 and body ok', async () => {
    const response = await request(app).get("/").send()

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('status', 'ok')
  });

  it('should return a hash', async () => {
    console.log('environments', process.env.DB_URL)
    // const response = await request(app).post("/shorten").send({
    //   url: 'test'
    // })
    // console.log('response', response)

    // expect(response.status).toBe(201)
    // expect(response.body).toHaveProperty('hash')
  });
});
