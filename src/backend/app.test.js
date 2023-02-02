const app = require("./app.js")
const request = require("supertest")

describe("Home Page Test",() => {
  test("GET /", async() => {
    const res = await request(app).get("/")
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8')
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe("Wormreads API")   
  })
})