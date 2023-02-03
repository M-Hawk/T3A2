const app = require("../app.js")
const request = require("supertest")
const UserModel = require("../models/userModel")
const {connectDB, disconnectDB} =  require("../config/db")

// set up before-tests and after-tests operations
beforeEach(async () => {
  await connectDB()
})

afterEach(async () => {
  await disconnectDB()
})

// then run tests

describe("App tests",() => {
  it("GET All Users", async() => {
    const res = await request(app).get("/")
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8')
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe("Wormreads API")   
  })

  describe("Get All Book Details",() => {
    let res

    beforeEach(async() => {
      res = await request(app).get("/api/users")
      expect(res.status).toBe(200)
      expect(res.headers['content-type']).toMatch(/json/i) 
    })

    it("Should return an array", () => {   
      expect(res.body).toBeInstanceOf(Array)   
    })

    it("Each element has the correct data structure", () => {
      res.body.forEach(el => {
        expect(el._id).toBeDefined()
        expect(el.username).toBeDefined()
        expect(el.password).toBeDefined()
      })
    })
  })
//  test("Register new User", async () =>{
//     const res = await request(app).post("/api/users/register").send({
//       username: "Sally", 
//       email: "sallysmith42@gmail.com",
//       password: "ChangeMe1!"
//     })
//     expect(res.headers['content-type']).toMatch(/json/i) 
//     expect(res.body._id).toBeDefined()
//     expect(res.body.username).toBeDefined()
//     expect(res.body.username).toBe("Sally")
//     expect(res.body.email).toBeDefined()
//     expect(res.body.email).toBe("sallysmith42@gmail.com")
//   })

test("Delete User", async () =>{
  const user = UserModel.find({username: "Janet"})
  const id = user._id
  const res = await request(app).delete("/api/users/"+ id )
  expect(res.headers['content-type']).toMatch(/json/i) 
})
  // 
})



