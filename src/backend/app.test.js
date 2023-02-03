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

describe("App tests",() => {
  it("GET Home Page", async() => {
    const res = await request(app).get("/")
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8')
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe("Wormreads API")   
  })

  describe("Get All Book Details",() => {
    let res

    beforeEach(async() => {
      res = await request(app).get("/api/bookdetails")
      expect(res.status).toBe(200)
      expect(res.headers['content-type']).toMatch(/json/i) 
    })

    it("Should return an array", () => {   
      expect(res.body).toBeInstanceOf(Array)   
    })

    it("Each element has the correct data structure", () => {
      res.body.forEach(el => {
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
  })
 test("Create new Book Details", async () =>{
    const res = await request(app).post("/api/bookdetails").send({
      title: "The Wonderful Wizard of Oz", 
      author: "L. Frank Baum and W. W. Denslow",
      genre: "Adventure",
      description: "Folklore, legends, myths and fairy tales have followed childhood through the ages, for every healthy youngster has a wholesome and instinctive love for stories fantastic, marvelous and manifestly unreal. The winged fairies of Grimm and Andersen have brought more happiness to childish hearts than all other human creations. Yet the old time fairy tale, having served for generations, may now be classed as “historical” in the children's library; for the time has come for a series of newer “wonder tales” in which the stereotyped genie, dwarf and fairy are eliminated, together with all the horrible and blood-curdling incidents devised by their authors to point a fearsome moral to each tale.",
      imageList: "https://covers.openlibrary.org/b/olid/OL7170815M-M.jpg",
      imageDetailed: "https://covers.openlibrary.org/b/olid/OL7170815M-L.jpg"
    })
    expect(res.headers['content-type']).toMatch(/json/i) 
    expect(res.body._id).toBeDefined()
    expect(res.body.title).toBeDefined()
    expect(res.body.title).toBe("The Wonderful Wizard of Oz")
    expect(res.body.author).toBeDefined()
    expect(res.body.author).toBe("L. Frank Baum and W. W. Denslow")
    expect(res.body.genre).toBeDefined()
    expect(res.body.genre).toBe("Adventure")
    expect(res.body.description).toBeDefined()
    expect(res.body.imageList).toBeDefined()
    expect(res.body.imageList).toBe("https://covers.openlibrary.org/b/olid/OL7170815M-M.jpg")
    expect(res.body.imageDetailed).toBeDefined()
    expect(res.body.imageDetailed).toBe("https://covers.openlibrary.org/b/olid/OL7170815M-L.jpg")
  })
})
