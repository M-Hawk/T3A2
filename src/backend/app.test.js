const app = require("./app.js")
const request = require("supertest")

const {connectDB, disconnectDB} =  require("./config/db")

// set up before-tests and after-tests operations
beforeEach(async () => {
  await connectDB()
})

afterEach(async () => {
  await disconnectDB()
})

// then run tests

describe("Home Page Test",() => {
  test("GET /", async() => {
    const res = await request(app).get("/")
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8')
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe("Wormreads API")   
  })
})

describe("BookDetails Test",() => {
  let res

  beforeEach(async() => {
    res = await request(app).get("/api/bookdetails")
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/json/i) 
  })
  it("Should return an array", () => {   
    expect(res.body).toBeInstanceOf(Array)   
  })
  it("Has an element with the correct data structure", () => {
    const el = res.body[0]
    expect(el._id).toBeDefined()
    expect(el.title).toBeDefined()
    expect(el.author).toBeDefined()
    expect(el.genre).toBeDefined()
    expect(el.description).toBeDefined()
    expect(el.imageList).toBeDefined()
    expect(el.imageDetailed).toBeDefined()
    expect(el._id.length).toBe(24)
  })
})